import{u as r,a as p,b as l,j as e,r as f,c as u,d as v,f as m,s as b}from"./index-4yXT2-Wa.js";const y=o=>o.drugs.listDrugs,k=o=>o.drugs.favoriteDrugs,w=o=>o.drugs.isLoading,j=o=>o.drugs.error,S=o=>o.drugs.selectedShop,D="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20aria-hidden='true'%20style='position:absolute;width:0;height:0;overflow:hidden'%3e%3cdefs%3e%3csymbol%20id='chevron-down'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3.2'%20d='m8%2012%208%208%208-8'%20style='stroke:var(--color1,%20%23fff)'/%3e%3c/symbol%3e%3csymbol%20id='heart-active'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%233470ff'%20stroke='%233470ff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.667'%20d='M27.787%206.148C26.46%204.82%2024.626%203.999%2022.6%203.999s-3.859.821-5.187%202.149L16%207.561l-1.413-1.415A7.336%207.336%200%200%200%204.213%2016.522L16%2028.307%2027.787%2016.52c1.327-1.328%202.148-3.161%202.148-5.187s-.821-3.859-2.148-5.187h0z'%20style='fill:var(--color2,%20%233470ff);stroke:var(--color2,%20%233470ff)'/%3e%3c/symbol%3e%3csymbol%20id='heart-normal'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='none'%20stroke='%23fff'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.667'%20d='M27.787%206.148C26.46%204.82%2024.626%203.999%2022.6%203.999s-3.859.821-5.187%202.149L16%207.561l-1.413-1.415A7.336%207.336%200%200%200%204.213%2016.522L16%2028.307%2027.787%2016.52c1.327-1.328%202.148-3.161%202.148-5.187s-.821-3.859-2.148-5.187h0z'%20style='stroke:var(--color1,%20%23fff)'/%3e%3c/symbol%3e%3csymbol%20id='x'%20viewBox='0%200%2032%2032'%3e%3cpath%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2.4'%20d='M24%208%208%2024M8%208l16%2016'/%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",C=r.div`
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
`,L=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,A=r.button`
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
`,B=r.svg`
  stroke: currentColor;
  fill: currentColor;
`,E=r.button`
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
`,F=({drug:o})=>{const n=p(),c=l(k),{name:d,price:t,foto:a}=o,i=c.some(g=>g._id===o._id),s=()=>{n(i?f(o):u(o))},x=i?"heart-active":"heart-normal";return e.jsxs("div",{children:[e.jsxs(C,{children:[e.jsx(L,{src:a,alt:d}),e.jsx(A,{type:"button",onClick:s,"aria-label":i?"Remove from favorites":"Add to favorites",children:e.jsx(B,{width:"18",height:"18",children:e.jsx("use",{href:`${D}#${x}`})})})]}),e.jsxs("p",{children:["Name: ",d]}),e.jsxs("p",{children:["Price: ",t]}),e.jsx(E,{children:"add to Cart"})]})},$=r.div`
  max-width: 1200px;

  display: flex;
  gap: 20px;

  margin: 0 auto;
  margin-top: 70px;
  padding: 20px 8px 40px;

  // outline: 2px solid red;
  // outline - рамка для обведення контенту
`,z=r.div`
  min-width: 215px;
  height: 740px;

  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;

  padding: 32px;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,T=r.div`
  flex-grow: 1;
  height: 740px;

  padding: 32px;

  overflow-y: auto;

  border: 2px solid var(--primary-grey-color);
  border-radius: 14px;
`,I=r.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 20px;
`,h=r.button`
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

  background-color: ${o=>o.$isActive?"var(--accent-active-color)":"var(--accent-color)"};
`,M=()=>{const o=p(),n=l(y),c=l(j),d=l(w),t=l(S);v.useEffect(()=>{o(m(t))},[o,t]);const a=s=>{o(b(s))},i=n.length>0;return e.jsx("section",{children:e.jsxs($,{children:[e.jsxs(z,{children:[e.jsx("h3",{children:"Shops:"}),e.jsx(h,{onClick:()=>a("Drugs 24"),$isActive:t==="Drugs 24",children:"Drugs 24"}),e.jsx(h,{onClick:()=>a("Pharmacy"),$isActive:t==="Pharmacy",children:"Pharmacy"}),e.jsx(h,{onClick:()=>a("E-Tabletka"),$isActive:t==="E-Tabletka",children:"E-Tabletka"}),e.jsx("div",{children:"etc..."})]}),e.jsxs(T,{children:[i&&e.jsx(I,{children:n.map(s=>e.jsx("li",{children:e.jsx(F,{drug:s})},s._id))}),!i&&e.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"There are no drugs in the store yet!"}),d&&!c&&e.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,margin:"100px auto 0"},children:"Request in progress..."}),c&&c]})]})})};export{M as default};
