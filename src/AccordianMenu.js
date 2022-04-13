import Accordion from 'react-bootstrap/Accordion'


const AccordianMenu = () => {
    return ( 
      <Accordion >
      <Accordion.Item className='accordian-menu' eventKey="0">
        <Accordion.Header>
        <div className='accordian-header'>

          <h6>Arizona Dept. of Revenue Payable</h6>
          <h6>$80,000</h6> 
        
        </div>
          
        </Accordion.Header>
        
        <Accordion.Body>
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.

        
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>
     );
}
 
export default  AccordianMenu;