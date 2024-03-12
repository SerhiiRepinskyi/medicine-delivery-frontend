import{u as r,a as h,b as s,j as e,c as m,d as u,g}from"./index-CkDF9v_h.js";import{s as f,H as v,a as b}from"./HeartIcon-C9jp2bAS.js";const j=r.div`
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
`,y=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,w=r.button`
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
`,C=r.button`
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
`,F=({drug:t})=>{const o=h(),i=s(f),{name:a,price:l,foto:c}=t,n=i.some(x=>x._id===t._id),d=()=>{o(n?m(t):u(t))},p=()=>{o(g(t))};return e.jsxs("div",{children:[e.jsxs(j,{children:[e.jsx(y,{src:c,alt:a}),e.jsx(w,{type:"button",onClick:d,"aria-label":n?"Remove from favorites":"Add to favorites",children:e.jsx(v,{isActive:n})})]}),e.jsxs("p",{children:["Name: ",a]}),e.jsxs("p",{children:["Price: ",l]}),e.jsx(C,{type:"button",onClick:p,children:"remove from Cart"})]})},k=r.div`
  max-width: 1200px;
  display: flex;
  gap: 20px;

  margin: 0 auto;
  margin-top: 70px;
  padding: 20px 8px 40px;

  // outline: 2px solid red;
  // outline - рамка для обведення контенту
`,S=r.form`
  min-width: 400px;
  height: 740px;

  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  padding: 8px;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,D=r.div`
  flex-grow: 1;
  height: 740px;

  padding: 32px;

  overflow-y: auto;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,L=r.button`
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
`,q=r.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 20px;
`,T=()=>{const t=s(b),o=t.length>0;return e.jsx("section",{children:e.jsxs(k,{children:[e.jsxs(S,{children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"phone",children:"Phone:"}),e.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0}),e.jsx("label",{htmlFor:"address",children:"Address:"}),e.jsx("input",{type:"text",id:"address",name:"address",required:!0}),e.jsx(L,{type:"submit",children:"Submit"})]}),e.jsxs(D,{children:[o&&e.jsx(q,{children:t.map(i=>e.jsx("li",{children:e.jsx(F,{drug:i})},i._id))}),!o&&e.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"There are no drugs in the Shopping Cart yet!"})]})]})})};export{T as default};
