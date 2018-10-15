import os
import shutil

path = os.getcwd()

protoPath = path + "/../proto"
outPath = path +"/out"
jsMesOutPath =outPath +"/js"
javaOutPath = outPath +"/java"


def delDir(dirs):
    if os.path.exists(dirs) :
        shutil.rmtree(dirs)

delDir(outPath)

os.makedirs("./out/js")
os.makedirs("./out/java")

jsSrcPath =path + "/../client/web/src/mes"
javaSrcPath = path + "/../server/src/main/java/com/lirunlong/mes"

def isSuc(exitCode):
    if exitCode == 0 :
        print("success")
    else:
        print("faild")
        exit(1)

# js ts
print("build js")
jsProtoCmd = "pbjs -t static-module -w commonjs -o "+jsMesOutPath+"/mes.js "+protoPath+"/mes.proto"
isSuc(os.system(jsProtoCmd))
print("build ts")
tsProtoCmd = "pbts -o "+jsMesOutPath+"/mes.d.ts "+jsMesOutPath+"/mes.js"
isSuc(os.system(tsProtoCmd))

#java 
print("build java")
javaProtoCmd = "protoc -I="+protoPath+" --java_out="+javaOutPath+" "+protoPath + "/mes.proto"
isSuc(os.system(javaProtoCmd))

#copy
delDir(jsSrcPath)
delDir(javaSrcPath)

shutil.copytree(javaOutPath+"/com/lirunlong/mes", javaSrcPath)
shutil.copytree(jsMesOutPath, jsSrcPath)



