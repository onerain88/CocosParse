import { _decorator, Component, log, Node, sys } from 'cc';
import Parse from '../ParseJS/Parse';
import ParseUser from '../ParseJS/ParseUser';
const { ccclass, property } = _decorator;

@ccclass('HelloWorld')
export class HelloWorld extends Component {
    async start() {
      log('HelloWorld start');
      Parse.initialize('prs_8d4a9b3c6e1f7a2', 'K8jD5fG2pR9YqW3zX7vB6nH4tM1LbVc');
      Parse.serverURL = "https://sudoku.ihappygame.com/parse";

      let currentUser = await ParseUser.currentAsync();
      log('当前用户', currentUser);

      let channel;
      let openId;
      if (sys.platform === sys.Platform.IOS) {
        channel = 'iOS';
        openId = 'iOS-123'
      } else if (sys.platform === sys.Platform.ANDROID) {
        channel = 'Android';
        openId = 'Android-123'
      } else if (sys.platform === sys.Platform.WECHAT_GAME) {
        channel = 'wechat';
        openId = 'wechat-123'
      } else if (sys.platform === sys.Platform.BYTEDANCE_MINI_GAME) {
        channel = 'bytedance';
        openId = 'bytedance-123'
      } else {
        channel = 'web';
        openId = 'web-123'
      }
      try {
        currentUser = await this.loginWithOpenId(channel, openId);
        log('登录成功', currentUser);
      } catch (err) {
        log('登录失败', err);
      }
    }

    async loginWithOpenId(channel: string, openId: string) {
      const username = `${channel}-${openId}`;
      const password = openId;
      try {
        // 1. 尝试直接登录
        const user = await Parse.User.logIn(username, password);
        console.log("登录成功", user.id);
        return user;
      } catch (err) {
        if (err.code === 101) {
          // 用户不存在，创建新用户
          const newUser = new Parse.User();
          newUser.set("username", username);
          newUser.set("password", password);
          newUser.set("openId", openId); // 冗余字段，方便查询
          await newUser.signUp();
          console.log("新用户注册并登录成功", newUser.id);
          return newUser;
        } else {
          throw err;
        }
      }
    }
}

