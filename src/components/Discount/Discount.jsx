import FreshFruits from '../../assets/fresh-fruits.png'
import Button from '../Button/Button'

const Discount = () => {
    return (
        <section className='bg-zinc-100 bg-contain bg-no-repeat bg-right' style={{ backgroundImage: `url(${FreshFruits})` }}>
            <div className='md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-10'>
                <span className='md:text-9xl text-6xl font-bold text-orange-500 transform md:-rotate-90 h-fit md:self-center'>20%</span>

                <div className='max-w-[700px]'>
                    <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold'>First Order Discount!</h3>
                    <p className='text-zinc-600 my-6'>Enjoy a exclusive first order dicount on your grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality garunteed.</p>
                    <Button content="Get a Discount" />
                </div>

            </div>
        </section>
    )
}

export default Discount