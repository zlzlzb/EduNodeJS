#include <node.h>
#include <v8.h>

using namespace v8;


void Add( const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  if (args.Length() < 2) {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong arguments")));
    return;
  }

  double value = args[0]->NumberValue() + args[1]->NumberValue();
  Local<Number> num = Number::New(isolate, value);

  args.GetReturnValue().Set(num);
}


void Method( const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  
  //todo
  
  args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
}

void RunCallback( const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();
  Local<Function> cb = Local<Function>::Cast(args[0]);
  const unsigned argc = 1;
  Local<Value> argv[argc] = { String::NewFromUtf8(isolate, "hello world") };
  cb->Call(Null(isolate), argc, argv);
}

void CreateObject( const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  Local<Object> obj = Object::New(isolate);
  obj->Set(String::NewFromUtf8(isolate, "msg"), args[0]->ToString());

  args.GetReturnValue().Set(obj);
}

void init(Local<Object> exports) {
        Isolate* isolate = exports->GetIsolate();

  NODE_SET_METHOD(exports, "createObject", CreateObject);
}

void init(Local<Object> exports)
{
	Isolate* isolate = exports->GetIsolate();
	exports->Set(String::NewFromUtf8(isolate,"prop"),
				String::NewFromUtf8(isolate,"hello"));
				
	NODE_SET_METHOD(exports, "method", Method);
	NODE_SET_METHOD(exports, "add", Add);
	NODE_SET_METHOD(exports, "callback", RunCallback);
	NODE_SET_METHOD(exports, "createObject", CreateObject);

}

NODE_MODULE(hello,init)
 