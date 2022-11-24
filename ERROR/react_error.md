# ERROR NOTE - React

#### [22.11.04] DOM에 직접 접근하여 classList 메소드를 통해 클래스를 추가하고 제거했더니 정상적으로 동작하지 않는다.

- <a href="https://sylagape1231.tistory.com/59">블로그 포스트로 작성</a>

<br/><br/>

#### [22.11.04] React에서 특정 요소에 이벤트를 연결하고, event 객체를 매개변수로 받아 활용하는 코드를 작성했는데, <code>event is deprecated</code> 에러가 발생했다.

- <a href="https://sylagape1231.tistory.com/60">블로그 포스트로 작성</a>

<br/><br/>

#### [22.11.04] setState를 통해 상태값을 변경하니 원하는 값이 하나씩 밀린 채 변경되는 바람에, 상태값을 활용한 로직이 내 의도대로 동작하지 않는다.

- <a href="https://sylagape1231.tistory.com/61">블로그 포스트로 작성</a>

<br/><br/>

#### [22.11.15] (Router를 활용한) React 프로젝트를 초기 세팅 완료하고 실행(npm start)해보았는데, 화면에 아무것도 나타나지 않는다.

- <strong>원인</strong> : (모르겠음)

- <strong>해결</strong> : Router 컴포넌트의 코드를 파일 내에서 다시 작성해본다.

<br/><br/>

#### [22.11.15] 아래와 같이 코드를 작성했는데 화면에 아무것도 출력되지 않는다. (상위 컴포넌트는 생략)

```js
// MenuList.js
const MENU_LIST_DATAS = [
  "눈",
  "간",
  "관절 / 뼈",
  "장",
  "다이어트",
  "위 /소화",
  "피부",
  "피로 / 활력",
];

const MenuList = () => {
  return (
    <>
      ...
      <div className="">
        {MENU_LIST_DATAS.forEach((data) => (
          <ListItem name={data} />
        ))}
      </div>
    </>
  );
};

export default MenuList;
```

```js
// Listitem.js
import React from "react";

const ListItem = ({ name }) => {
  return <p>{name}</p>;
};

export default ListItem;
```

- <strong>원인</strong> : 자바스크립트에서 <code>map</code> 메소드는 배열을 반환하지만, React의 JSX에서 <code>map</code> 메소드는 컴포넌트를 반환하는 함수가 인자로 들어가 있으면, 배열이 반환되지 않고 여러 개의 컴포넌트가 반환된다.

- <strong>해결</strong> : 상수 데이터 배열에 <code>forEach</code> 메소드가 아닌 <code>map</code> 메소드를 사용해주면 된다.

  ```js
  // MenuList.js
  const MENU_LIST_DATAS = [
    ...
  ];

  const MenuList = () => {
    return (
      <>
        ...
        <div className="">
          {MENU_LIST_DATAS.map((data) => (
            <ListItem name={data} />
          ))}
        </div>
      </>
    );
  };

  export default MenuList;
  ```

<br/>

#### [22.11.18] 슬라이더를 리엑트로 구현하였는데, 처음에 시간 간격에 따라 페이지가 이동할 때 화면에 사진이 사라져버렸다.

- <strong>원인</strong> : <code>slideLength</code> 값 ( === <code>sliderData.length</code>)에 정상적으로 값이 나오지 않고 0이 찍힌다.

  - 0이 찍힌 이유는 useState 문제인 줄 알았는데, 아니었던 것 같다. 정확한 원인을 파악하지 못한 채 문제 해결

  - 다음 부터는 문제가 발생하면 해결하기 전에 미리 문제 상황을 잘 기록해두자..

- <strong>해결</strong> : 선행되는 데이터는 상단에 미리 작성하기, useEffect의 의존성 배열에 <code>auto</code> 함수 삽입

  ```js
  const PromotionSlide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderData, setSliderData] = useState([]);
    const slideLength = sliderData.length;

    useEffect(() => {
      fetch("/data/sliderData.json", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setSliderData(data);
        });
    }, []);

    useEffect(() => {
      setCurrentSlide(0);
    }, []);

    const auto = () => {
      slideInterval = setInterval(nextSlide, intervalTime);
    };

    let slideInterval = null;
    let intervalTime = 5500;

    useEffect(() => {
      auto();
      return () => clearInterval(slideInterval);
    }, [auto, currentSlide, slideInterval]);

    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % slideLength);
    };

    const prevSlide = () => {
      setCurrentSlide((currentSlide - 1 + 4) % slideLength);
    };

    return (...);
  };
  ```

<br/><br/>

#### [22.11.22] useEffect를 통해 백엔드에서 데이터를 받아 화면에 출력하려 했으나 (useEffect의 렌더링 특성으로 인해) 오류가 발생했다.

```js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDemonstration from "./ProductDemonstration/ProductDemonstration";
import BuyBar from "./BuyBar/BuyBar";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const [productData, setProductData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://10.58.52.143:3000/products?id=${id}`, {
      method: "GET",
    })
      .then((result) => result.json())
      .then((data) => setProductData(data.products[0]));
  }, [id]);

  console.log(productData);

  return (
    <div className="product-detail">
      <ProductDemonstration productData={productData} />
      <BuyBar productData={productData} />
    </div>
  );
};

export default ProductDetail;
```

- <strong>원인</strong> : useEffect는 렌더링이 모두 끝난 후 내부 Side Effect가 실행된다.  
  그 이유는 첫 번째로 '매 렌더링 마다 Side Effect가 실행되는 비효율성을 막기 위함'이고, 두 번째로 'Side Effect가 오래 걸려 렌더링이 블로킹 되는 것을 방지하기 위함'이다.

- <strong>해결</strong> : 조건부 렌더링을 이용한다.

  ```js
  import React, { useState, useEffect } from "react";
  import { useParams } from "react-router-dom";
  import ProductDemonstration from "./ProductDemonstration/ProductDemonstration";
  import BuyBar from "./BuyBar/BuyBar";
  import "./ProductDetail.scss";

  const ProductDetail = () => {
    const [productData, setProductData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      fetch(`http://10.58.52.143:3000/products?id=${id}`, {
        method: "GET",
      })
        .then((result) => result.json())
        .then((data) => setProductData(data.products[0]));
    }, [id]);

    console.log(productData);

    // 아래 코드를 추가
    if (!productData.id) return null;

    return (
      <div className="product-detail">
        <ProductDemonstration productData={productData} />
        <BuyBar productData={productData} />
      </div>
    );
  };

  export default ProductDetail;
  ```

<br/><br/>

#### [22.11.22] (위와 동일한 문제) 백엔드에서 데이터를 받아 화면에 출력하려 했으나 아무것도 표시되지 않는다. 해당 데이터는 <code>undefined</code>로 출력된다.

```js
const ProductDemonstration = productData => {
  const {
    name,
    information,
    thumbnail,
    price,
    made_from,
    expiry_date,
    stock,
    discount_rate,
  } = productData;

  console.log(name);

  ...
}
```

- <strong>원인</strong> : 받아온 productData 객체 데이터의 구조를 제대로 파악하지 못해, 자바스크립트에서 해당 경로에 있는 데이터를 읽지 못한 상태였다.

- <strong>해결</strong> : 매개 변수에도 객체 구조 분해 할당을 적용한다.

  ```js
  const ProductDemonstration = ({ productData }) => {
    const {
      name,
      information,
      thumbnail,
      price,
      made_from,
      expiry_date,
      stock,
      discount_rate,
    } = productData;

    console.log(name);

    ...
  }
  ```

  - <strong>받아온 객체 데이터의 구조가 어떻게 되어있는지 (console.log로 찍어서) 꼭 확인해본 다음</strong> 원하는 데이터에 어떻게 접근할 지 고민해보자.

<br/><br/>

#### [22.11.23] 컴포넌트 함수 안에 아래처럼 useState의 Modifier 함수 (set으로 시작하는 함수)를 주었다니 무한 렌더링이 발생

```js
import React, { useState } from 'react';

const BuyBar = ({ productData }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const {
    name,
    information,
    brand_name,
    price,
    discount_rate,
  } = productData;

  setTotalPrice(price);

  ...

  return (
    ...
  );
};
```

- <strong>원인</strong> : state 값이 달라지면 해당 컴포넌트가 리렌더링 되는 특성으로 인해 아래의 순으로 무한 렌더링이 발생했다.

  - totalPrice 값이 0으로 초기화

  - setTotalPrice에 의해 totalPrice 값이 다른 값(price 값)으로 세팅 -> 리렌더링 발생 -> BuyBar 함수 재실행

  - BuyBar 함수가 재실행 됨에 따라 price 값이 다시 0으로 세팅

  - setTotalPrice에 의해 totalPrice 값이 다른 값(price 값)으로 세팅 -> 리렌더링 발생 -> BuyBar 함수 재실행

  - 이런 식으로 로직이 무한 반복되어 무한 렌더링 발생

- <strong>해결</strong> : useEffect Hook을 활용. useEffect 내부에 set으로 시작하는 Modifier 함수를 작성하여, 첫 렌더링 시 그리고 price 값이 변할 시에만 리렌더링이 발생하도록 설정해준다.

  ```js
  import React, { useState } from 'react';

  const BuyBar = ({ productData }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const {
      name,
      information,
      brand_name,
      price,
      discount_rate,
    } = productData;

    useEffect(() => {
      setTotalPrice(parseInt(price));  // price 값이 문자열 타입이라 정수형으로 변경 (이번 문제와는 무관한 부분)
    }, [price]);

    if (totalPrice === 0) return null;  // 조건부 렌더링

    ...

    return (
      ...
    );
  };
  ```

<br/><br/>

#### (문제) [22.11.23] React 프로젝트의 특정 컴포넌트에서 <code>\<h3></code> 태그가 인식이 되지 않는다.

```js
import React from "react";

const ProductDemonstration = ({ productData }) => {
  const { information, thumbnail } = productData;

  return (
    <section className="product-demonstration">
      <div className="product-description">
        <h2>제품 설명</h2>
        <p>{information}</p>
      </div>
      <div className="product-review">
        <p>좋네요</p>
      </div>
    </section>
  );
};

export default ProductDemonstration;
```

<img src="img/react/221123_h3.png">

- <strong>원인</strong> : <code>reset.css</code>가 적용되어 기본 스타일이 초기화 되었다.

- <strong>해결</strong> : 적용된 <code>reset.css</code>는 그대로 두고, 태그에 따로 스타일 속성을 부여해서 작업을 해주면 된다.

<br/><br/>

<!-- #### (문제) [22.00.00(날짜)]

- <strong>원인</strong> :

- <strong>해결</strong> :

<br/><br/> -->

<!-- #### (문제) [22.00.00(날짜)]

- <a href="">블로그 포스트로 작성</a>

<br/><br/> -->
