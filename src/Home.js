import './AppStyle.js';
import CardStyle from './CardStyle';
import TableMenu from './TableMenu';
import TableStyle from './TableStyle';
import CardMenu from './CardMenu';
import AppStyle from './AppStyle.js';
const Home = () => {
    return (  
        <AppStyle>
      
            <div className='App'>
                <TableStyle>
                    <TableMenu />
                </TableStyle>
                
                
                <CardStyle>
                    <CardMenu/>
                </CardStyle>
            </div>
        </AppStyle>
    );
}
 
export default Home;