

export default function STATIC() {
  var localLink = "../../yoshop_kz/www.yoshop.kz/ru/index.html"
  var globalLink = "https://shohibexlab.github.io/static_sites_ibexlab/yoshop_kz/www.yoshop.kz/ru/"
  return (
    <div style={{height: "100vh"}}>
     
        <iframe src={globalLink}
              // https://shohibexlab.github.io/static_sites_ibexlab/yoshop_kz/www.yoshop.kz/ru/
              // ../../yoshop_kz/www.yoshop.kz/ru/index.html
             frameBorder="0" 
             width="100%" 
             height="100%" 
             scrolling="none"
             ></iframe>
             </div>
  )
}


