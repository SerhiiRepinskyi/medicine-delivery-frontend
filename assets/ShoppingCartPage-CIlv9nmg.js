import{u as e,a as y,b as c,j as t,c as b,d as j,g as w,h as k}from"./index-D_41hrYv.js";import{s as C,f as F,H as D,a as S}from"./HeartIcon-DUvb_TNm.js";const I=e.div`
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
`,q=e.button`
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
`,B=e.div`
  display: flex;
  // gap: 2px;
  align-content: center;
  justify-content: center;

  margin: 6px auto;
`,p=e.button`
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
`,L=e.input`
  width: 50px;
  height: 24px;

  text-align: center;
  background-color: ;
`,_=e.button`
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
`,z=({drug:r})=>{const o=y(),i=c(C),a=c(n=>F(n,r._id)),{name:l,price:x,shop:h,foto:u}=r,s=i.some(n=>n._id===r._id),m=()=>{o(s?b(r):j(r))},g=()=>{o(w(r))},v=()=>d(a+1),f=()=>d(Math.max(a-1,1)),d=n=>{o(k({drugId:r._id,quantity:n}))};return t.jsxs("div",{children:[t.jsxs(I,{children:[t.jsx(Q,{src:u,alt:l}),t.jsx(q,{type:"button",onClick:m,"aria-label":s?"Remove from favorites":"Add to favorites",children:t.jsx(D,{isActive:s})})]}),t.jsxs("p",{children:["Name: ",l]}),t.jsxs("p",{children:["Price: ",x]}),t.jsxs("p",{children:["Shop: ",h]}),t.jsxs(B,{children:[t.jsx(p,{onClick:f,children:"–"}),t.jsx(L,{type:"number",value:a,readOnly:!0}),t.jsx(p,{onClick:v,children:"+"})]}),t.jsx(_,{type:"button",onClick:g,children:"remove from Cart"})]})},A=e.div`
  max-width: 1200px;
  display: flex;
  gap: 20px;

  margin: 0 auto;
  margin-top: 70px;
  padding: 20px 8px 40px;

  // outline: 2px solid red;
  // outline - рамка для обведення контенту
`,T=e.form`
  min-width: 400px;
  height: 740px;

  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  padding: 8px;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,P=e.div`
  flex-grow: 1;
  height: 740px;

  padding: 32px;

  overflow-y: auto;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,R=e.button`
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
`,E=e.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 20px;
`,M=()=>{const r=c(S),o=r.length>0;return t.jsx("section",{children:t.jsxs(A,{children:[t.jsxs(T,{children:[t.jsx("label",{htmlFor:"name",children:"Name:"}),t.jsx("input",{type:"text",id:"name",name:"name",required:!0}),t.jsx("label",{htmlFor:"email",children:"Email:"}),t.jsx("input",{type:"email",id:"email",name:"email",required:!0}),t.jsx("label",{htmlFor:"phone",children:"Phone:"}),t.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0}),t.jsx("label",{htmlFor:"address",children:"Address:"}),t.jsx("input",{type:"text",id:"address",name:"address",required:!0}),t.jsx(R,{type:"submit",children:"Submit"})]}),t.jsxs(P,{children:[o&&t.jsx(E,{children:r.map(i=>t.jsx("li",{children:t.jsx(z,{drug:i})},i._id))}),!o&&t.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"There are no drugs in the Shopping Cart yet!"})]})]})})};export{M as default};
