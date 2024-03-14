import{u as o,a as u,b as a,r as g,j as e,c as j,d as y,e as w,f as k,s as C}from"./index-BvncnX4U.js";import{s as S,a as D,H as A,b as T,c as L,d as E,e as F}from"./HeartIcon-Fcs8BdCW.js";const I=o.div`
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
`,_=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,P=o.button`
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
`,$=o.button`
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
`,z=({drug:t})=>{const i=u(),c=a(S),l=a(D),[r,s]=g.useState(!1),{name:d,price:n,foto:f}=t;g.useEffect(()=>{const x=l.some(b=>b._id===t._id);s(x)},[l,t._id]);const p=c.some(x=>x._id===t._id),v=()=>{i(p?j(t):y(t))},m=()=>{r||(i(w(t)),s(!0))};return e.jsxs("div",{children:[e.jsxs(I,{children:[e.jsx(_,{src:f,alt:d}),e.jsx(P,{type:"button",onClick:v,"aria-label":p?"Remove from favorites":"Add to favorites",children:e.jsx(A,{isActive:p})})]}),e.jsxs("p",{children:["Name: ",d]}),e.jsxs("p",{children:["Price: ",n]}),e.jsx($,{type:"button",onClick:m,disabled:r,children:r?"added to Cart":"add to Cart"})]})},B=o.div`
  max-width: 1200px;
  display: flex;
  gap: 20px;

  margin: 0 auto;
  margin-top: 70px;
  padding: 20px 8px 40px;

  // outline: 2px solid red;
  // outline - рамка для обведення контенту
`,R=o.div`
  min-width: 215px;
  height: 740px;

  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;

  padding: 32px 16px;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,H=o.div`
  flex-grow: 1;
  height: 740px;

  padding: 32px 16px;

  overflow-y: auto;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,W=o.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 20px;
`,h=o.button`
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
`,G=()=>{const t=u(),i=a(T),c=a(L),l=a(E),r=a(F);g.useEffect(()=>{t(k(r))},[t,r]);const s=n=>{t(C(n))},d=i.length>0;return e.jsx("section",{children:e.jsxs(B,{children:[e.jsxs(R,{children:[e.jsx("h3",{children:"Shops:"}),e.jsx(h,{onClick:()=>s("Drugs 24"),$isActive:r==="Drugs 24",children:"Drugs 24"}),e.jsx(h,{onClick:()=>s("Pharmacy"),$isActive:r==="Pharmacy",children:"Pharmacy"}),e.jsx(h,{onClick:()=>s("E-Tabletka"),$isActive:r==="E-Tabletka",children:"E-Tabletka"}),e.jsx("div",{children:"etc..."})]}),e.jsxs(H,{children:[d&&e.jsx(W,{children:i.map(n=>e.jsx("li",{children:e.jsx(z,{drug:n})},n._id))}),l&&!c&&e.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"Request in progress..."}),c&&c,!d&&e.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"There are no drugs in the store yet!"})]})]})})};export{G as default};
