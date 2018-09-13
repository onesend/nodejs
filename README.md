![OneSend logo](https://s3.amazonaws.com/onesend/mobile_logo.png)

## distribute your message

### How to use it

1. Go to [OneSend](http://getonesend.com){:target="_blank"} and register

2. Click on your name on the top right corner and choose [Keys](http://getonesend.com/app/settings/api-key){:target="_blank"}

3. In the dashboard click on [Add Organization](http://getonesend.com/app/add-company){:target="_blank"} and follow the steps to get your group key

**Example**

```javascript
const OneSend = require('onesend');

OneSend.setApiKey('YOUR_API_KEY');
OneSend.sendMessage('GROUP_KEY', 'Hello World');
```
