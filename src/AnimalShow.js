import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';

const svgMap = {
    bird,
    cat,
    cow,
    dog
}


function AnimalShow({type}){
return <div>
    <img alt="animal" src={svgMap[type]}/>
    </div>

}

export default AnimalShow;