
import {useState} from "react"
import Accordian from './Accordian'
import {Link} from 'react-router-dom'

const Instamart = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [visibleSection, setIsVisibleSection] = useState("")


  return <>

<div style={{display:'flex', justifyContent:'space-between'}}>
      <div className='menu-label' style={{marginTop:'5%', marginLeft:'5%'}}>Blog</div>
      <div style={{ fontSize:'25px'}}>
        <Link to = '/'> ⬅️Back to Home </Link>
        </div>
        </div> 
  <Accordian
  title={'Health'}
  description = {'Health is a positive concept that emphasizes both social and personal resources as well as physical abilities." This means that health is a resource to help an individual perform their function in society, rather than an end in itself. A healthy lifestyle allows you to live a full life with meaning and purpose.'}
  isVisible= {visibleSection === 'health'}
  setIsVisible={setIsVisibleSection}
  name = "health"
  />

   <Accordian
  title={'Balanced Diet'}
  description = {'A balanced diet supplies the nutrients your body needs to work effectively. Without balanced nutrition, your body is more prone to disease, infection, fatigue, and low performance.Children who don’t get enough healthy foods may face growth and developmental problems, poor academic performance, and frequent infections.They can also develop unhealthy eating habits that may persist into adulthood.Without exercise, they’ll also have a higher risk of obesity and various diseases that make up metabolic syndrome, such as type 2 diabetes and high blood pressure.'}
  isVisible={visibleSection === "diy"}
  setIsVisible={setIsVisibleSection}
  name = 'diy'
  />

   <Accordian
  title={'Natural vs Proccessed Carbs'}
  description = {"When it comes to choosing the healthiest carbs for your diet, it’s important to understand the difference between natural and processed carbs. Natural carbs are whole-food sources of carbohydrates, such as fruits, vegetables, legumes, and grains that have not been processed or refined. These healthy carbs provide essential vitamins, minerals, fiber, and antioxidants that can help reduce inflammation, boost the immune system, and lower the risk of chronic diseases. On the other hand, processed carbs are usually stripped of most of their nutrients and added with sugar, salt, and/or preservatives. These types of carbs are quickly absorbed into the bloodstream and can lead to spikes in blood sugar levels. Examples of processed carbs include white bread, pastries, sugary cereals, cookies, and chips. It’s best to avoid these types of carbs if you want to stay healthy. The bottom line is that when it comes to healthy carbs, natural sources should always be prioritized over processed versions. Eating a variety of nutrient-dense whole foods is the key to nourishing your body and promoting optimal health."}
  isVisible={visibleSection === "diet"}
  setIsVisible={setIsVisibleSection}
  name = 'diet'
 />
  </>
}

export default Instamart