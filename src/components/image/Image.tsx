
type props={
    src:string,
    className?:string,
    alt?:string,
}
function Image({src,className,alt}:props) {
  return (
        <img src={src} className={className} alt={alt} />
   
  )
}

export default Image