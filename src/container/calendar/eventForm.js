import React, { Component } from 'react'
import moment from 'moment';
import { Field } from 'redux-form';
import { Input, DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

class EventForm extends Component {
    constructor(props) {
        super(props)      

        this.renderInput = this.renderInput.bind(this);
        this.renderStartDate = this.renderStartDate.bind(this);
        this.renderEndDate = this.renderEndDate.bind(this);
    }

    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        return (
            <div>
                <Input
                    placeholder={label}
                    value={this.props.start || null}
                    {...input}
                    {...custom}
                />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }
    renderStartDate = ({ input, label, value, type, meta: { touched, error }, ...custom }) => {
        // console.log(value)
        return (
            <DatePicker value={moment(this.props.startDate).toISOString() === null
                ? null
                : moment(this.props.startDate)}
              />
        )
    }
    renderEndDate = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        
        return (
            <DatePicker onChange={(e)=>console.log(moment(e).toISOString())}/>
        )
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <Field
                    name="startDate"
                    label="Start Date"
                    value={moment(this.props.startDate).toISOString() === null ?moment() :moment(this.props.startDate)}
                    component={this.renderStartDate} />
                <Field
                    name="endDate"
                    label="End Date"
                    value={moment(this.props.startDate).toISOString() === null ?moment() :moment(this.props.startDate)}
                    component={this.renderEndDate}
                     /> */}
                <Field
                    name="title"
                    label="Title"
                    component={this.renderInput} />
                <Field
                    name="user"
                    label="User"
                    component={this.renderInput} />
                <Field
                    name="description"
                    label="Description"
                    component={this.renderInput} />
            </div>
        )
    }
}
export default EventForm;