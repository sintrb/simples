import sys
sys.path.insert(0, "..")
import time


from opcua import ua, Server


if __name__ == "__main__":

    # setup our server
    server = Server()
    server.set_server_name('hhhh')
    server.set_endpoint("opc.tcp://0.0.0.0:4840/freeopcua/server/")

    # setup our own namespace, not really necessary but should as spec
    uri = "http://examples.freeopcua.github.io"
    idx = server.register_namespace(uri)
    print 'idx ', idx
    # get Objects node, this is where we should put our nodes
    objects = server.get_objects_node()

    # populating our address space
    obj = objects.add_object(idx, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    f1 = obj.add_variable(idx, "F1", 6.7)
    f1.set_writable()  # Set MyVariable to be writable by clients
    
    f2 = obj.add_variable(idx, "F2", 'hello')
    f2.set_writable()
    custom_etype = server.nodes.base_event_type.add_object_type(2, 'MySecondEvent')
    custom_etype.add_property(2, 'MyIntProperty', ua.Variant(0, ua.VariantType.Int32))
    custom_etype.add_property(2, 'MyBoolProperty', ua.Variant(True, ua.VariantType.Boolean))

    mysecondevgen = server.get_event_generator(custom_etype, obj)
    
    # starting!
    server.start()
    
    try:
        count = 0
        while True:
            time.sleep(1)
            count += 0.1
            f1.set_value(count)
            
            mysecondevgen.trigger(message="MySecondEvent " + str(count))
    finally:
        # close connection, remove subcsriptions, etc
        server.stop()
