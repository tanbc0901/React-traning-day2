import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProgressBar } from './components/progress-bar/progress-bar';
import { RatingComponent } from './components/rating-bar/rating';

// function handleClick() {
//   console.log("clicked");
// }

function handleError(e: any) {
  console.error(e);
}

interface UserAvatarProps {
  avatar?: string;
  onError: (v: string) => void;
}

function UserAvatar(props: UserAvatarProps) {
  return React.createElement('img', {
    className: 'img-responsive',
    src: props.avatar,
    alt: 'Test',
    onError: () => props.onError("Error nay")
  });
}

function ExcerciseOneFunction(props: any) {
  let element;
  if (props.avatar) {
    element = <UserAvatar avatar={props.avatar} onError={handleError} />;
  } else {
    element = <div>Nothingggggg</div>;
  }

  return (
    <React.Fragment>
      {/* <div className={props.containerClass}> */}
      <div className="box">
        {element}
        <img alt="icon" className='img-res' src={props.icon} />
        <h3 className='title'>{props.type === 0 ? `${props.title} mi` : `$ ${props.title}`}</h3>
        <span className='subTitle'>{props.subTitle}</span>
      </div>
      {/* </div> */}
    </React.Fragment>
  );

  //#region comment
  // return React.createElement('div',
  //   {
  //     className: props.containerClass
  //   },
  //   React.createElement(UserAvatar, { avatar: props.avatar, onError: handleError }),
  //   React.createElement('div', { className: 'box' },
  //     React.createElement('img', {
  //       className: 'img-res',
  //       src: props.icon,
  //     }),
  //     React.createElement('h3',
  //       {
  //         className: 'title'
  //       },
  //       props.type === 0 ? `${props.title} mi` : `$ ${props.title}`
  //     ),
  //     React.createElement('span', { className: 'subTitle' }, props.subTitle)
  //   ));
}

// ExcerciseOneFunction.defaultProps = {
//   containerClass: 'container col-xs-3',
//   type: 0, // 0: is distance, 1: is money
//   icon: "1",
//   title: "2",
//   subTitle: "3",
//   avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png'
// };
//#endregion

const test1 = {
  containerClass: 'container col-xs-3',
  type: 0,
  title: "158.3",
  subTitle: "Distance driven",
  icon: 'icon_location.png',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png'
};
const test2 = {
  containerClass: 'container col-xs-3',
  type: 1,
  title: "1428",
  subTitle: "Verhicles on track",
  icon: 'icon_tick.jpg',
  avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Wikipedia_User-ICON_byNightsight.png'
};

var excercises = [test1, test2];

interface AppState {
  pgProgress: number;
}
class App extends React.Component<{}, AppState> {
  state = {
    pgProgress: 30
  };
  increment = () => {
    this.setState((state) => {
      return {
        pgProgress: state.pgProgress + 10
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>

          {excercises.map((exc) => (
            <ExcerciseOneFunction key={exc.icon} {...exc} />
          ))}
          {/* 
        <ExcerciseOneFunction {...test1}></ExcerciseOneFunction>
        <ExcerciseOneFunction {...test2}></ExcerciseOneFunction> */}

        <button onClick={this.increment}>Increment</button>
        <ProgressBar width={this.state.pgProgress} />

        <RatingComponent max={10} ratingValue={5}/>

        </header>
      </div>
    );
  }
}


export default App;
