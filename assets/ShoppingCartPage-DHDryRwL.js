import{u as e,a as w,b as x,j as t,c as C,d as k,g as F,h as D}from"./index-BvncnX4U.js";import{s as S,a as m,H as I}from"./HeartIcon-Fcs8BdCW.js";const q=e.div`
  width: 274px;
  height: 210px;

  position: relative;

  display: flex;
  flex-shrink: 0;

  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  overflow: hidden;
`,Q=e.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,_=e.button`
  position: absolute;
  top: 14px;
  right: 14px;

  cursor: pointer;

  width: 18px;
  height: 18px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  transition: transform var(--transition);

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`,L=e.div`
  display: flex;
  // gap: 2px;
  align-content: center;
  justify-content: center;

  margin: 6px auto;
`,u=e.button`
  cursor: pointer;

  width: 28px;
  height: 24px;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  border-radius: 8px;
  border: none;

  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-hover-color);
  }
`,T=e.input`
  width: 50px;
  height: 24px;

  text-align: center;
  background-color: ;
`,z=e.button`
  cursor: pointer;

  width: 100%;
  max-width: 274px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  border-radius: 12px;
  border: none;

  margin-top: 8px;

  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-hover-color);
  }
`,A=({drug:r})=>{const o=w(),c=x(S),n=(x(m).find(a=>a._id===r._id)||{}).quantityUser||1,{name:s,price:d,shop:g,foto:v}=r,p=c.some(a=>a._id===r._id),f=()=>{o(p?C(r):k(r))},y=()=>{o(F(r))},b=()=>h(n+1),j=()=>h(Math.max(n-1,1)),h=a=>{o(D({drugId:r._id,quantityUser:a}))};return t.jsxs("div",{children:[t.jsxs(q,{children:[t.jsx(Q,{src:v,alt:s}),t.jsx(_,{type:"button",onClick:f,"aria-label":p?"Remove from favorites":"Add to favorites",children:t.jsx(I,{isActive:p})})]}),t.jsxs("p",{children:["Name: ",s]}),t.jsxs("p",{children:["Price: ",d]}),t.jsxs("p",{children:["Shop: ",g]}),t.jsxs(L,{children:[t.jsx(u,{onClick:j,children:"–"}),t.jsx(T,{type:"number",value:n,readOnly:!0}),t.jsx(u,{onClick:b,children:"+"})]}),t.jsx(z,{type:"button",onClick:y,children:"remove from Cart"})]})},B=e.div`
  max-width: 1200px;

  margin: 0 auto;
  margin-top: 70px;
  padding: 20px 8px 40px;

  // outline: 2px solid red;
  // outline - рамка для обведення контенту
`,P=e.div`
  display: flex;
  gap: 20px;
`,R=e.form`
  min-width: 400px;
  height: 670px;

  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  padding: 32px 16px;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,U=e.div`
  flex-grow: 1;
  height: 670px;

  padding: 32px 16px;

  overflow-y: auto;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,E=e.button`
  cursor: pointer;

  width: 100%;
  max-width: 160px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: var(--primary-white-color);
  background-color: var(--accent-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */

  border-radius: 12px;
  border: none;

  transition: background-color var(--transition);

  &:hover,
  &:focus {
    background-color: var(--accent-hover-color);
  }
`,H=e.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 20px;
`,N=e.div`
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: flex-end;

  margin-top: 30px;
`,O=()=>{const r=x(m),o=r.length>0,c=r.reduce((i,l)=>{const n=l.quantityUser,s=l.price,d=n*s;return i+d},0);return t.jsx("section",{children:t.jsxs(B,{children:[t.jsxs(P,{children:[t.jsxs(R,{id:"orderForm",children:[t.jsx("label",{htmlFor:"name",children:"Name:"}),t.jsx("input",{type:"text",id:"name",name:"name",required:!0}),t.jsx("label",{htmlFor:"email",children:"Email:"}),t.jsx("input",{type:"email",id:"email",name:"email",required:!0}),t.jsx("label",{htmlFor:"phone",children:"Phone:"}),t.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0}),t.jsx("label",{htmlFor:"address",children:"Address:"}),t.jsx("input",{type:"text",id:"address",name:"address",required:!0})]}),t.jsxs(U,{children:[o&&t.jsx(H,{children:r.map(i=>t.jsx("li",{children:t.jsx(A,{drug:i})},i._id))}),!o&&t.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"There are no drugs in the Shopping Cart yet!"})]})]}),t.jsxs(N,{children:[t.jsxs("p",{children:["Total price: ",c]}),t.jsx(E,{form:"orderForm",type:"submit",children:"Submit"})]})]})})};export{O as default};
