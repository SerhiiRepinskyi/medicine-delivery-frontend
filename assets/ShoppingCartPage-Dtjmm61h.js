import{u as r,a as u,b as s,j as e,c as m,d as g,g as f}from"./index-B5G_hyHx.js";import{s as v,i as b,a as j}from"./sprite-icons-Cn50FojF.js";const y=r.div`
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
`,w=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,C=r.button`
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
`,F=r.svg`
  stroke: currentColor;
  fill: currentColor;
`,k=r.button`
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
`,S=({drug:t})=>{const o=u(),i=s(v),{name:a,price:l,foto:c}=t,n=i.some(h=>h._id===t._id),d=()=>{o(n?m(t):g(t))},p=()=>{o(f(t))},x=n?"heart-active":"heart-normal";return e.jsxs("div",{children:[e.jsxs(y,{children:[e.jsx(w,{src:c,alt:a}),e.jsx(C,{type:"button",onClick:d,"aria-label":n?"Remove from favorites":"Add to favorites",children:e.jsx(F,{width:"18",height:"18",children:e.jsx("use",{href:`${b}#${x}`})})})]}),e.jsxs("p",{children:["Name: ",a]}),e.jsxs("p",{children:["Price: ",l]}),e.jsx(k,{type:"button",onClick:p,children:"remove from Cart"})]})},D=r.div`
  max-width: 1200px;
  display: flex;
  gap: 20px;

  margin: 0 auto;
  margin-top: 70px;
  padding: 20px 8px 40px;

  // outline: 2px solid red;
  // outline - рамка для обведення контенту
`,L=r.form`
  min-width: 400px;
  height: 740px;

  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  padding: 8px;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,q=r.div`
  flex-grow: 1;
  height: 740px;

  padding: 32px;

  overflow-y: auto;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,I=r.button`
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
`,T=r.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 20px;
`,B=()=>{const t=s(j),o=t.length>0;return e.jsx("section",{children:e.jsxs(D,{children:[e.jsxs(L,{children:[e.jsx("label",{htmlFor:"name",children:"Name:"}),e.jsx("input",{type:"text",id:"name",name:"name",required:!0}),e.jsx("label",{htmlFor:"email",children:"Email:"}),e.jsx("input",{type:"email",id:"email",name:"email",required:!0}),e.jsx("label",{htmlFor:"phone",children:"Phone:"}),e.jsx("input",{type:"tel",id:"phone",name:"phone",required:!0}),e.jsx("label",{htmlFor:"address",children:"Address:"}),e.jsx("input",{type:"text",id:"address",name:"address",required:!0}),e.jsx(I,{type:"submit",children:"Submit"})]}),e.jsxs(q,{children:[o&&e.jsx(T,{children:t.map(i=>e.jsx("li",{children:e.jsx(S,{drug:i})},i._id))}),!o&&e.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"There are no drugs in the Shopping Cart yet!"})]})]})})};export{B as default};
