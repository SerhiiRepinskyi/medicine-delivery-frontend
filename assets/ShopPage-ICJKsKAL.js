import{u as r,a as u,b as a,r as g,j as e,c as y,d as w,e as k,f as C,s as S}from"./index-B5G_hyHx.js";import{s as D,a as A,i as T,b as L,c as E,d as F,e as $}from"./sprite-icons-Cn50FojF.js";const I=r.div`
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
`,_=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,P=r.button`
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
`,z=r.svg`
  stroke: currentColor;
  fill: currentColor;
`,B=r.button`
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

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`,R=({drug:t})=>{const i=u(),c=a(D),l=a(A),[o,s]=g.useState(!1),{name:d,price:n,foto:f}=t;g.useEffect(()=>{const h=l.some(j=>j._id===t._id);s(h)},[l,t._id]);const p=c.some(h=>h._id===t._id),v=()=>{i(p?y(t):w(t))},m=()=>{o||(i(k(t)),s(!0))},b=p?"heart-active":"heart-normal";return e.jsxs("div",{children:[e.jsxs(I,{children:[e.jsx(_,{src:f,alt:d}),e.jsx(P,{type:"button",onClick:v,"aria-label":p?"Remove from favorites":"Add to favorites",children:e.jsx(z,{width:"18",height:"18",children:e.jsx("use",{href:`${T}#${b}`})})})]}),e.jsxs("p",{children:["Name: ",d]}),e.jsxs("p",{children:["Price: ",n]}),e.jsx(B,{type:"button",onClick:m,disabled:o,children:"add to Cart"})]})},W=r.div`
  max-width: 1200px;
  display: flex;
  gap: 20px;

  margin: 0 auto;
  margin-top: 70px;
  padding: 20px 8px 40px;

  // outline: 2px solid red;
  // outline - рамка для обведення контенту
`,q=r.div`
  min-width: 215px;
  height: 740px;

  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;

  padding: 32px;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,N=r.div`
  flex-grow: 1;
  height: 740px;

  padding: 32px;

  overflow-y: auto;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,G=r.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 20px;
`,x=r.button`
  cursor: pointer;

  width: 100%;
  max-width: 160px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: var(--primary-white-color);
  // background-color: var(--accent-color);
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

  background-color: ${t=>t.$isActive?"var(--accent-active-color)":"var(--accent-color)"};
`,K=()=>{const t=u(),i=a(L),c=a(E),l=a(F),o=a($);g.useEffect(()=>{t(C(o))},[t,o]);const s=n=>{t(S(n))},d=i.length>0;return e.jsx("section",{children:e.jsxs(W,{children:[e.jsxs(q,{children:[e.jsx("h3",{children:"Shops:"}),e.jsx(x,{onClick:()=>s("Drugs 24"),$isActive:o==="Drugs 24",children:"Drugs 24"}),e.jsx(x,{onClick:()=>s("Pharmacy"),$isActive:o==="Pharmacy",children:"Pharmacy"}),e.jsx(x,{onClick:()=>s("E-Tabletka"),$isActive:o==="E-Tabletka",children:"E-Tabletka"}),e.jsx("div",{children:"etc..."})]}),e.jsxs(N,{children:[d&&e.jsx(G,{children:i.map(n=>e.jsx("li",{children:e.jsx(R,{drug:n})},n._id))}),!d&&e.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"There are no drugs in the store yet!"}),l&&!c&&e.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"Request in progress..."}),c&&c]})]})})};export{K as default};
