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
          teaser_text:"Lobster Rolls are weird,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient.",
          main_text:"Nihil hic munitissimus hab,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient."
        },
        {
          title: "Texas Chilli & Flamin' Hot",
          link:"texaschilliandflaminhot",
          featured: false,
          main_image: "/images/mainChilliHot.jpg",
          teaser_image:"/images/teaserChilliHot.jpg",
          type: "Flamin' Hot",
          rating: 5,
          teaser_text:"Nihil hic munitissimus hab,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient.",
          main_text:"Nihil hic munitissimus hab,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient."
        },
        {
          title: "Tater Tot Casserole & Chilli Cheese",
          link:"tatertotcasseroleandchillicheese",
          featured: false,
          main_image: "/images/mainTaterChilli.jpg",
          teaser_image:"/images/teaserTaterChilli.jpg",
          type: "Chilli Cheese",
          rating: 5,
          teaser_text:"Nihil hic munitissimus hab,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient.",
          main_text:"Nihil hic munitissimus hab,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient."
        },
        {
          title: "French Onion Dip & Classic Ranch",
          link:"frenchonionandclassicranch",
          featured: false,
          main_image: "/images/mainOnionRanch.jpg",
          teaser_image:"/images/teaserOnionRanch.jpg",
          type: "Classic Ranch",
          rating: 4,
          teaser_text:"Nihil hic munitissimus hab,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient.",
          main_text:"Nihil hic munitissimus hab,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient."
        },
        {
          title: "Guacamole & Spicy Jalapeño",
          link:"guacandjalap",
          featured: false,
          main_image: "/images/mainGuacJalap.jpg",
          teaser_image:"/images/teaserGuacJalap.jpg",
          type: "Spicy Jalapeño",
          rating: 4,
          teaser_text:"Nihil hic munitissimus hab,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient.",
          main_text:"Nihil hic munitissimus hab,endi senatus locus, nihil horum? Morbi fringilla convallis sapien, id pulvinar odio volutpat. Ambitioni dedisse scripsisse iudicaretur. Tu quoque, Brute, fili mi, nihil timor populi, nihil! Salutantibus vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Me non paenitet nullum festiviorem excogitasse ad hoc. Contra legem facit qui id facit quod lex prohibet. Quae vero auctorem tractata ab fiducia dicuntur. Cum sociis natoque penatibus et magnis dis parturient."
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
