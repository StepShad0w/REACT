import Button from "./Button/Button"
export default function TabsSections({active, onChange, items}){
    console.log(items)
    return(
        <section>
            {items.map((item)=> {
               return <Button isActive={true} onClick={() => onChange(item)} >{item.text}</Button>
            } )}
            
            
        </section>
    )
}