# -*- coding: UTF-8 -*
'''
Created on 2017年2月3日

@author: RobinTang
'''

from opcua import ua, Client

client = Client('opc.tcp://127.0.0.1:4840/freeopcua/server/')
client.connect()
root = client.get_root_node()#.get_child(["0:Objects", "2:Root"])

def print_node(node, level=0):
    print '%s%s%s' % ('|' if level else '', '--' * level, node.get_browse_name())
    for c in node.get_children():
        print_node(c, level + 1)
print_node(root, level=0)


#         sig = inspect.getargspec(func)
#         args = args[:(len(sig.args)-1)]
