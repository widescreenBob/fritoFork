import React, { Component } from 'react';
import { Router} from "@reach/router";
import About from '../About';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';
import ForkedFood from '../ForkedFood';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      motto: "Eat food with a frito",
      current_type: "All",
      types: [
        "Original", "Chilli Cheese", "Classic Ranch", "Spicy Jalapeño", "Flamin' Hot", "All"
      ],
      about: {
        image: "images/fritosALL.jpg",
        text: "We love Fritos, I guess who doesn't. Communists maybe. We are making the definative guide to what to eat with what flavor."
      },
      recipies: [
        {
          title: "Lobster Roll & Original",
          link:"lobsterrollandoriginal",
          featured: true,
          main_image: "/images/mainLobsterOrig.jpg",
          teaser_image:"/images/teaserLobsterOrig.jpg",
          type: "Original",
          rating: 3,
          teaser_text:"Lobster Rolls are weird, I guess. Lobster falls out of the roll. Lobster is expensive. So you want a tool to get it back to your face hole.",
          main_text:"Lobster Rolls are weird, I guess. Lobster falls out of the roll. Lobster is expensive. So you want a tool to get it back to your face hole.  We went with original, because you probably want to taste this roll you spent $10 on. Overall this wasn't bad. Ideally you can keep the slippery lobster in the roll, without it, you are using your hands like a savage. One of the other downside is dealing with the sideways looks of the other people who ordered the lobster rolls but didn't have the presense of mind to bring a utility chip with them. I would say this, don't lobster roll with out a frito."
        },
        {
          title: "Texas Chilli & Flamin' Hot",
          link:"texaschilliandflaminhot",
          featured: false,
          main_image: "/images/mainChilliHot.jpg",
          teaser_image:"/images/teaserChilliHot.jpg",
          type: "Flamin' Hot",
          rating: 5,
          teaser_text:"Texas Chilli and Flamin' Hot are proof of a higher power. It's the perfect combination.",
          main_text:"Texas Chilli and Flamin' Hot are proof of a higher power. It's the perfect combination. If you are eating texas chilli without any fritos you are fool. A foolish fool.  If you are, but haven't tried Flamin' Hot, it's time to up your game. Pro tip, if you are invited to a chilli cook off, bring some of these magic Fritos. They can spice up Karen's weak ass spice game. This gets a five. If we had a bigger scale it would be more. "
        },
        {
          title: "Tater Tot Casserole & Chilli Cheese",
          link:"tatertotcasseroleandchillicheese",
          featured: false,
          main_image: "/images/mainTaterChilli.jpg",
          teaser_image:"/images/teaserTaterChilli.jpg",
          type: "Chilli Cheese",
          rating: 4,
          teaser_text:"Tater Tot Casserole & Chilli Cheese. It's like Bennifer.",
          main_text:"Tater Tot Casserole & Chilli Cheese. It's like Bennifer. A combination that on the face of it is an affront to common decency. But here is the deal, this is pretty decent. So Chilli Cheese Fritos are heavy on the Chilli. The tater tot casserole is a good way to balance this. This is especially true if the casserole is cheese heavy and ranch. Which, if we are honest, is what we are shooting for with a casserole."
        },
        {
          title: "French Onion Dip & Classic Ranch",
          link:"frenchonionandclassicranch",
          featured: false,
          main_image: "/images/mainOnionRanch.jpg",
          teaser_image:"/images/teaserOnionRanch.jpg",
          type: "Classic Ranch",
          rating: 2,
          teaser_text:"French Onion Dip & Classic Ranch. Yeah... I mean, we all get stuck at these parties.",
          main_text:"French Onion Dip & Classic Ranch. Yeah... I mean, we all get stuck at these parties. It's fine. There is usually always French Onion dip at a gathering. If you are living right, you are always travelling with a bag of Fritos, so this can save a gathering. If you are stuck at another Patriots Super Bowl party you might want to mix up the flavors. Or I guess just drink. "
        },
        {
          title: "Guacamole & Spicy Jalapeño",
          link:"guacandjalap",
          featured: false,
          main_image: "/images/mainGuacJalap.jpg",
          teaser_image:"/images/teaserGuacJalap.jpg",
          type: "Spicy Jalapeño",
          rating: 4,
          teaser_text:"Guacamole & Spicy Jalapeño. This just works.",
          main_text:"Guacamole & Spicy Jalapeño. This just works. I don't care where you live. Even Cleveland.  Most people use regular tortilla chips. Most people are fools. This combination of flavors is perfect. If you want to up the dip game. Get this on the go."
        }
      ]
    };
    this.updateType = this.updateType.bind(this);
  }

  updateType(newType) {
    this.setState({
      current_type: newType
    });
  }

  render() {
    return (
      <>
        <Header motto={this.state.motto} />
        <Router>
          <Home path="/"  
            recipies={this.state.recipies} 
            items={this.state.types} 
            update= {this.updateType}
            current_type={this.state.current_type}
          />
          <About path="/about" about={this.state.about}/>
          <ForkedFood path="forked-food/:invoiceId" 
            recipies={this.state.recipies}
          />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
