import React from 'react'
import ReactDOM from 'react-dom'


var today = new Date
var year = today.getFullYear()
var yearInterval


const app = function() {


	const AppView = React.createClass({

    getInitialState: function(){
        return{
            actual:year,
            action:false,
            currentSelection:''
        }
    },

    _future: function(){
            if(!this.state.action){
            yearInterval = setInterval(() => {
            year *= 1.001
//action is true when the button is in use: to avoid messing up the 3 buttons
//current selection colors the active button
            this.setState({
                actual: year,
                action:true,
                currentSelection: 'future'
            })

            return year

        },50)

    }

        console.log(yearInterval)
    },

    _stop: function(){
        console.log(yearInterval)
        clearInterval(yearInterval)
        this.setState({
            action:false,
            currentSelection: 'stop'
        })
    },

    _past: function(){
        if(!this.state.action){
            yearInterval = setInterval(() => {
            year /= 1.001
//action is true when the button is in use: to avoid messing up the 3 buttons
//current selection colors the active button
            this.setState({
                actual: year,
                action:true,
                currentSelection: 'past'
            })

            return year

        },50)

    }

        console.log(yearInterval)
    },


		render: function(){
            var futureButtonClassName = ''
            var stopButtonClassName = ''
            var pastButtonClassName = ''

            if(this.state.currentSelection === 'future'){
                futureButtonClassName = ' on'
            }
            if(this.state.currentSelection === 'stop'){
                stopButtonClassName = ' on'
            }
            if(this.state.currentSelection === 'past'){
                pastButtonClassName = ' on'
            }



			return (
                <div>
                <h1>TIME MACHINE</h1>
                <h1>{Math.floor(this.state.actual)}</h1>
                <div className='bottonera'>
                <button     className={futureButtonClassName}   onClick={this._future}>FUTURE</button>
                <button     className={stopButtonClassName}     onClick={this._stop}>STOP!</button>
                <button     className={pastButtonClassName}     onClick={this._past}>PAST</button>
                </div>
                </div>
		)}
	})

	ReactDOM.render(<AppView/>,document.querySelector('.container'))
}

app()