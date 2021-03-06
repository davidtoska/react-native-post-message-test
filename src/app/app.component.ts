import {Component, OnInit} from '@angular/core';

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: any) => void;
    }
  }
}
window.ReactNativeWebView = window.ReactNativeWebView || {postMessage: (message) => {
    console.log("Seems like the ReactNativeWebView is not available on the window object");
}};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'react-native-post-message-test';

  ngOnInit(): void {
    setInterval(() => {
      console.log("Posting message to react-native webview");

      if("ReactNativeWebView" in window) {
        window?.ReactNativeWebView?.postMessage("Hello from ispe-app");
      }
    }, 2000)
  }

}
