export default function Art({n=0,label,image}){
 if(image) return <img src={image} alt={label} loading="lazy" className="art"/>
 const o=(n*37)%50
 return(<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} className="art">
 <defs><linearGradient id={`g${n}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#062B32"/><stop offset="1" stopColor={n%2?'#087E8B':'#0B0D10'}/></linearGradient></defs>
 <rect width="400" height="300" fill={`url(#g${n})`}/>
 {[0,1,2].map(i=><path key={i} d={`M-10 ${70+i*60+o} C 90 ${10+i*50+o}, 190 ${230-i*30}, 410 ${50+i*70}`} fill="none" stroke={i===1?'#D6AE55':'#F6F3EC'} strokeOpacity={i===1?.85:.2} strokeWidth={i===1?1.5:16} strokeLinecap="round"/>)}
 </svg>)
}
