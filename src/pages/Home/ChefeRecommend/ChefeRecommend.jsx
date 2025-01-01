
import chefeImg from '../../../assets/home/slide5.jpg'
import SectionTitle from '../Category/SectionTitle/SectionTitle';

const ChefeRecommend = () => {
    return (
        <div className='my-12'>
            <SectionTitle
            subHeading={'should Try'}
            heading={'Chefe Recommends'}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='w-full text-center bg-gray-100 pb-5'>
                <div>
                    <img className='w-full h-[300px] object-cover' src={chefeImg} alt="" />
                </div>
                <div className='text-center space-y-2 mt-5'>
                    <h3 className='text-3xl font-bold'>Caeser Salad</h3>
                    <p>Lettuce, Eggs, Parmesan, Cheeses, Chicken, Breast fillets, Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    <button className="btn uppercase btn-outline border-0 border-b-4">Add To Card</button>
                </div>
            </div>
            <div className='w-full text-center bg-gray-100 pb-5'>
                <div>
                    <img className='w-full h-[300px] object-cover' src={chefeImg} alt="" />
                </div>
                <div className='text-center space-y-2 mt-5'>
                    <h3 className='text-3xl font-bold'>Caeser Salad</h3>
                    <p>Lettuce, Eggs, Parmesan, Cheeses, Chicken, Breast fillets, Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    <button className="btn uppercase btn-outline border-0 border-b-4">Add To Card</button>
                </div>
            </div>
            <div className='w-full text-center bg-gray-100 pb-5'>
                <div>
                    <img className='w-full h-[300px] object-cover' src={chefeImg} alt="" />
                </div>
                <div className='text-center space-y-2 mt-5'>
                    <h3 className='text-3xl font-bold'>Caeser Salad</h3>
                    <p>Lettuce, Eggs, Parmesan, Cheeses, Chicken, Breast fillets, Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                    <button className="btn uppercase btn-outline border-0 border-b-4">Add To Card</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ChefeRecommend;