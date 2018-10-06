import com.lirunlong.thread.ThreadPool;

public class TestThreadPool {
    public static void main(String[] args) {
        ThreadPool threadPool = new ThreadPool(10,50);

        threadPool.addTask(()->{
            try {
                Thread.sleep(3000l);
                System.out.println(" task 1");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        threadPool.addTask(()->{
            try {
                Thread.sleep(3000l);
                System.out.println(" task 2");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        threadPool.addTask(()->{
            System.out.println("task 3");
        });

    }
}
