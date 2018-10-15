package com.lirunlong.gameSystem;

public class Game {
    private static Game instance;
    public static Game getInstance(){
        if(instance == null){
            instance =  new Game();
        }
        return instance;
    }
    public Game(){
        userManager =  new UserManager();
    }
    private UserManager userManager;

    public UserManager getUserManager() {
        return userManager;
    }

    public void setUserManager(UserManager userManager) {
        this.userManager = userManager;
    }
}
