import img from './sketch.svg'
import Apporach from './aproach';
const Illustration = ()=>{
    return    <div class="col-lg-6 mb-4">
    <div class="card shadow mb-4"  >
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
    </div>
    <div class="card-body" >
        <div class="text-center">
            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={img} alt="..." />
        </div>
        <p>Add some quality, svg illustrations to your project courtesy of , a
            constantly updated collection of beautiful svg images that you can use
            completely free and without attribution!</p>
           
        <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
            unDraw &rarr;</a>
    </div>
</div>
    <Apporach/>
</div>
}

export default Illustration ;