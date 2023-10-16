import girlimage from "./girl_sitting.jpg"
const Image = () => {
    return ( 
        <div className="image">
            <img src={girlimage} alt="image of the girl" /> 
        </div>
     );
}
 
export default Image;