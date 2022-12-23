# ERROR NOTE - React (2022년 12월)

### [22.12.09] 토스 페이먼츠 api를 활용한 결제 기능 구현 중 axios를 읽지 못하는 문제

```js
useEffect(() => {
  let axios = require('axios').default;

  let options = {
    method: 'POST',
    url: 'https://api.tosspayments.com/v1/payments/confirm',
    headers: {
      Authorization:
        'Basic dGVzdF9za183WFpZa0tMNE1yak9uWjdaTVIxODB6SndsRVdSOg==',
      'Content-Type': 'application/json',
    },
    data: {
      paymentKey: paymentKey,
      amount: amount,
      orderId: order,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
});
```

- 위의 코드는 결제 승인 요청을 토스 페이먼트 서버에 요청하는 코드이다.

- 그러나 <code>axios</code>가 불러와지질 않아 승인 요청이 정상적으로 이루어지지 않았다.

<br />

- <strong>원인</strong> : <strong>버전이 맞지 않아서</strong> 발생한 문제였다.. (이틀동안
  고생했는데 허무..)

<br />

- <strong>해결</strong> : <code>axios</code>의 버전을 1.0.0으로 다운 그레이드한
  후 다시 진행해보니 정상적으로 작동했다.

<br /><br />

#### [22.12.22] React Router를 새로고침 시 발생하는 <code>cannot GET /URL</code> 에러

- <strong>원인</strong> :

- <strong>해결</strong> :

<br/><br/>

<!-- #### [22.12.23] React-Router를 적용한 React 앱을 Github Page로 배포할 때

- <strong>원인</strong> :

- <strong>해결</strong> :

<br/><br/> -->
