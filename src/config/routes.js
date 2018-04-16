import {StackNavigator, TabNavigator} from 'react-navigation';

//importing Views
import Login from '../views/login.js';
import NewHomePage from '../views/newHomePage.js';
import PocDetails from '../views/newPocDetails.js';
import MCHome from '../views/newMCHome.js';
import NewMCDetails from '../views/newMCDetails.js';
import Opportunities from '../views/Opportunities.js';
import UserStory from '../views/UserStory.js';
import TechStack from '../views/TechStack.js';
import TechDescription from '../views/TechDescription.js';



export default StackNavigator ({
  loginPage:{
    screen:Login,
    navigationOptions:{
      header:()=>null,
    },
  },
  Home:{
    screen : NewHomePage,
    navigationOptions:{
      headerTitle:'Rapid Prototyping',
      headerTintColor: '#fff',
      headerStyle:{
      backgroundColor: '#a5154a',
    }
    },
  },
  MCHomepage:{
    screen : MCHome,
    navigationOptions:{
      headerTitle:'Micro Components',
      headerTintColor: '#fff',
      headerStyle:{
      backgroundColor: '#a5154a',
    }
    },
  },
  techStack:{
    screen : TechStack,
    navigationOptions:{
      headerTitle:'Tech Stacks',
      headerTintColor: '#fff',
      headerStyle:{
      backgroundColor: '#a5154a',
    }
    },
  },
  MCPage:{
    screen : NewMCDetails,
    navigationOptions:{
      headerTitle:'Micro Components',
      headerTintColor: '#fff',
      headerStyle: {
      backgroundColor: '#a5154a',
    }
    },
  },
  techDescription:{
    screen : TechDescription,
    navigationOptions:{
      headerTitle:'Tech',
      headerTintColor: '#fff',
      headerStyle: {
      backgroundColor: '#a5154a',
    }
    },
  },
  Opportunities:{
     screen : Opportunities,
     navigationOptions:{
       headerTitle:'Opportunities',
       headerTintColor: '#fff',
       headerStyle:{
       backgroundColor: '#a5154a',
     }
     },
   },
  poc:{
      screen : PocDetails,
      navigationOptions:{
        headerTitle:'MVP',
        headerTintColor: '#fff',
        headerStyle:{
        backgroundColor: '#a5154a',
      }
      },
    },
    UserStory:{
      screen: UserStory,
      navigationOptions:{
        headerTitle:'Status',
        headerTintColor: '#fff',
        headerStyle:{
        backgroundColor: '#a5154a',
      }
      },
    }

})
