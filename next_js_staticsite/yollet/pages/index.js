// export default function STATIC() {
//   return (
//     <div style={{height: "100vh"}}>
//       <iframe src="https://shohibexlab.github.io/static_sites_ibexlab/yollet_net"
//              frameBorder="0" 
//              width="100%" 
//              height="100%"
//              scrolling="none"
//              ></iframe>
//              </div>
//   )
// }


export default function STATIC() {
  const DOMAIN_NAME = process.env.DOMAIN_NAME;
    return (
      <div style={{height: "100vh"}}>
        <iframe src={DOMAIN_NAME}
        // <iframe src="../../vixco_net/index.html"
               frameBorder="0" 
               width="100%" 
               height="100%"
               scrolling="none"
               ></iframe>
               </div>
    )
  }
  
  
  