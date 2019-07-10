
import * as React from 'react';



interface IProps {

  countBy?: number;
   

}



interface IState {

  count: number;

}



class Description extends React.Component<IProps, IState> {

  public static defaultProps: Partial<IProps> = {

    countBy: 1,
    

  };



  public state: IState = {

    count: 0,

  };



  public increase = () => {

    const countBy: number = this.props.countBy!;

    const count = this.state.count + countBy;

    this.setState({ count });

  };
  public decrease = () => {

    const countBy: number = this.props.countBy!; 

    const count = this.state.count - countBy; 

    this.setState({ count }); 
  }


  public render() {

    return (

      <div>

        <p>Happy Birthday, Lucy!! Today, you are {this.state.count} years old! A FULL woman!</p>

        <button onClick={this.increase}>Increase Age</button>
        <button onClick={this.decrease}>Decrease Age</button>

      </div>

    );

  }

}



export default Description;