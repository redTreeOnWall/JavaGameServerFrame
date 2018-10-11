import com.google.protobuf.InvalidProtocolBufferException;
import com.lirunlong.mes.Mes;

public class TestProto {
    public static void main(String[] args) {

        Mes.TestMes mes = Mes.TestMes.newBuilder()
                .setMes("111")
                .setMesId(122).build();
        System.out.println(mes.toByteArray().length);
        try {
            Mes.TestMes m= Mes.TestMes.parseFrom(mes.toByteArray());
            System.out.println(m);
        } catch (InvalidProtocolBufferException e) {
            e.printStackTrace();
        }
    }
}
