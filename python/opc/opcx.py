# -*- coding: UTF-8 -*
'''
Created on 2017年3月25日

@author: RobinTang
'''
from opcua import ua
class Opcx(object):
    DEFAULT_PORT = 4840
    DEFAULT_URL = "opc.tcp://127.0.1:4840/freeopcua/server/"
    DEFAULT_URI = "http://opcx.inruan.com"


class OpcxServer(object):
    objmap = {}
    def __init__(self, port=Opcx.DEFAULT_PORT, name='OpcxServer'):
        from opcua import Server
        server = Server()
        server.set_server_name(name)
        server.set_endpoint("opc.tcp://0.0.0.0:%d/freeopcua/server/" % port)
        self.objix = server.register_namespace(Opcx.DEFAULT_URI)
        self.server = server
    
    def start(self):
        self.server.start()
    
    def stop(self):
        self.server.stop()
    
    def setValue(self, objname, valname, val):
        if objname not in self.objmap:
            obj = self.server.get_objects_node().add_object(self.objix, objname)
            objd = {
                    'obj':obj,
                    'val':{}
                }
            self.objmap[objname] = objd
        else:
            objd = self.objmap[objname]
        if valname not in objd['val']:
            var = objd['obj'].add_variable(self.objix, valname, val)
            var.set_writable()
            objd['val'][valname] = var
        else:
            var = objd['val'][valname]
        var.set_value(val)




