import {  
      IonButton,
      IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonItem, 
      IonMenu, 
      IonMenuButton, 
      IonMenuToggle, 
      IonPage, 
      IonRouterOutlet, 
      IonSplitPane, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react'
  import {homeOutline, logOutOutline, rocketOutline, settingsOutline} from 'ionicons/icons';
  import { Redirect, Route } from 'react-router';
  import Home from './Home';
  import About from './About';
  import Details from './Details';
  import EditProfilePage from './EditProfilePage';
  
  
  const Menu: React.FC = () => { 
    const path = [
        {name:'Home', url: '/it35-lab/app/home', icon: homeOutline},
        {name:'About', url: '/it35-lab/app/about', icon: rocketOutline},
        {name:'Profile', url: '/it35-lab/app/profile', icon: settingsOutline},
    ]
  
    return (
        <IonPage>
            <IonSplitPane contentId="main" when="never">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                Menu
                            </IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {path.map((item,index) =>(
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="forward">
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}
  
                        {/*Logout Button*/}
                        <IonButton routerLink="/it35-lab" routerDirection="back" expand="full">
                            <IonIcon icon={logOutOutline} slot="start"> </IonIcon>
                        Logout
                        </IonButton>
                        
                    </IonContent>
                </IonMenu>
                
                <IonRouterOutlet id="main">
                    <Route exact path="/it35-lab/app/home" component={Home} />
                    <Route exact path="/it35-lab/app/home/details" component={Details} />
                    <Route exact path="/it35-lab/app/about" component={About} />
                    <Route exact path="/it35-lab/app/profile" component={EditProfilePage} />
                    <Route exact path="/it35-lab/app">
                        <Redirect to="/it35-lab/app/home"/>
                    </Route>
                </IonRouterOutlet>
  
            </IonSplitPane>
        </IonPage>
    );
  };
  
  export default Menu;