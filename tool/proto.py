import os
path = os.getcwd()
protoPath = path + "/../proto/"
jsMesOutPath =path + "/../client/web/src/mes/"
javaOutPath = path + "/../server/src/main/java/"

def isSuc(exitCode):
    if exitCode == 0 :
        print("success")
    else:
        print("faild")
        exit(1)

# js ts
print("build js")
jsProtoCmd = "pbjs -t static-module -w commonjs -o "+jsMesOutPath+"mes.js "+protoPath+"mes.proto"
isSuc(os.system(jsProtoCmd))
print("build ts")
tsProtoCmd = "pbts -o "+jsMesOutPath+"mes.d.ts "+jsMesOutPath+"mes.js"
isSuc(os.system(tsProtoCmd))

#java 
print("build java")
javaProtoCmd = "protoc -I="+protoPath+" --java_out="+javaOutPath+" "+protoPath + "mes.proto"
isSuc(os.system(javaProtoCmd))

