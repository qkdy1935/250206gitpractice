const productInfo =
  "https://my-json-server.typicode.com/Divjason/array-project/data";

let productData = null;

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.map((item) => {
        return {
          ...item,
          id: idCounter++, // id를 추가
        };
      }),
    };

    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const productName = params.get("name");
    console.log(productName);

    // category와 name으로 필터링된 제품 찾기
    const product = products.data.find(
      (product) => product.category === category && product.name === productName
    );

    // 가격 형식화
    if (product) {
      productData = product;
      const price = new Intl.NumberFormat("ko-KR", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);

      const productDetailDiv = document.querySelector("#product-detail");
      productDetailDiv.innerHTML = `
        <div class="product-category">
          <h3>현재 카테고리: ${product.category} > ${product.name}</h3>
        </div>
        <div class="product-img">
          <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h1>${product.name}</h1>
          <p>카테고리: ${product.category}</p>
          <p>소비자가: ${price}</p>
        </div>
      `;
    } else {
      const productDetailDiv = document.querySelector("#product-detail");
      productDetailDiv.innerText = "상품이 존재하지 않습니다.";
    }
  })
  .catch((error) => {
    console.error(error);
  });

// 카카오 공유하기
Kakao.init("ff9acae94c6d82480b60148cba43f9f8");

console.log(Kakao.isInitialized());
const shareMessage = () => {
  Kakao.Share.createDefaultButton({
    container: "#kakaotalk-sharing-btn",
    objectType: "feed",
    content: {
      title: `${productData.name}`,
      description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
      imageUrl:
        "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      {
        title: "앱으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
    ],
  });
};
