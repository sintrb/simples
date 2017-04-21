# -*- coding: UTF-8 -*
'''
Created on 2017年4月21日

@author: RobinTang
'''

# -*- coding: UTF-8 -*
'''
Created on 2017年4月1日

@author: RobinTang
'''

import os, json

import tornado.httpserver
import tornado.ioloop
import tornado.web

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        with open(os.path.join(os.path.dirname(__file__), 'index.html')) as f:
            self.write(f.read())

from opcua import ua, Client
# class OpcUAClient(object):
#     def conncet(self, serveruri):
#         '''Connect to OPCUA server'''
#         self.client = Client(serveruri)
#         self.client.connect()
#     def get_nodes(self, parentId):
#         nodes = self.client.get_nodes(parentId) if parentId else [self.client.get_root_node()]
#         return nodes

class ApiHandler(tornado.web.RequestHandler):
    def __init__(self, application, request, **kwargs):
#         self.client = Client()
        tornado.web.RequestHandler.__init__(self, application, request, **kwargs)
    def ret(self, data=None, code=0, message=None):
        self.set_header('Content-Type', 'application/json; charset=UTF-8')
        if message and code == 0:
            code = -1
        self.write(json.dumps({
            'code':code,
            'msg':message,
            'data':data
        }))
        self.finish()
    def get(self, apiname):
        func = getattr(self, 'api_%s' % apiname, None)
        if not func:
            self.ret(message=u'No such api: %s' % apiname)
        import inspect
        argspec = inspect.getargspec(func)
        funcagrs = argspec.args
        defaults = argspec.defaults
        arginfos = []
        argslen = len(funcagrs) - (len(defaults) if defaults else 0) - 1
        for i, k in enumerate(funcagrs[1:]):
            arg = {
                   'name':k
                   }
            if i >= argslen:
                arg['default'] = defaults[i - argslen] 
            arginfos.append(arg)

        missargs = []
        kvargs = {}
        for p in arginfos:
            name = p['name']
            if not 'default' in p and self.get_argument(name, None) == None:
                missargs.append(name)
            else:
                kvargs[name] = self.get_argument(name, p.get('defualt'))
        if missargs:
            self.ret(message=u'Miss argment(s): %s' % (', '.join(missargs)))
        print kvargs
        try:
            res = func(**kvargs)
            self.ret(data=res)
        except Exception, e:
            import traceback
            traceback.print_exc()
            self.ret(message=e.message)
        
    
    def api_connect(self, serveruri):
        ApiHandler.client = Client(serveruri)
        ApiHandler.client.connect()
    
    def api_get_nodes(self, parentId):
        nodes = ApiHandler.client.get_node(str(parentId)).get_children() if parentId else [ApiHandler.client.get_root_node()]
        return [
                {
                 'NodeId':n.nodeid.to_string(),
                 'DisplayName':n.get_display_name().Text,
                 'BrowseName':n.get_browse_name().to_string()
                }
                
                for n in nodes
            ]
    
def main():
    from tornado.options import options, define
    from wsserver import ChannelSocketHandler
    define('port', type=int, default=8000)
    tornado_app = tornado.web.Application([
               (r"/ws/(?P<channel>\S+)", ChannelSocketHandler),
               (r"/api/(?P<apiname>\S+)", ApiHandler),
               (r"/", IndexHandler),
               ],
            static_path=os.path.join(os.path.dirname(__file__), 'static'),
            debug=True
    )
    server = tornado.httpserver.HTTPServer(tornado_app)
    server.listen(options.port, address='0.0.0.0')
    tornado.ioloop.IOLoop.instance().start()
    print 'x'

if __name__ == '__main__':
    main()
