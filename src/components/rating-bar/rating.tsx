import React, { Component } from "react";
import './styles.css';

interface RateBarProperties {
    max: number;
    ratingValue: number;
}

interface RatingStatus {
    value: number;
    active: boolean;
}

interface RatingState {
    ratingStatus: RatingStatus[];
    currentRatingValue: number;
}

export class RatingComponent extends Component<RateBarProperties, RatingState> {

    constructor(properties: RateBarProperties) {
        super(properties);
        const ratingStatus = this.calculateRatingStatus(properties.max, properties.ratingValue);

        this.state = {
            ratingStatus,
            currentRatingValue: properties.ratingValue
        }
    }

    calculateRatingStatus(max: number, ratingValue: number) {
        return Array.from({ length: max }, (value, index) => ({
            value: index + 1,
            active: index < ratingValue
        }));
    }

    select(index: number) {
        const rateValue = index + 1;
        const ratingStatus = this.state.ratingStatus.map((item, i) => {
            return {
                ...item,
                active: item.active = i <= index
            }
        });
        this.setState({
            ratingStatus,
            currentRatingValue: rateValue
        });
    }

    reset = () => {
        const ratingStatus = this.calculateRatingStatus(this.props.max, this.state.currentRatingValue);
        this.setState(
            {
                ratingStatus
            });
    }

    render() {
        return (
            <>
                <h3>Rating ***</h3>
                <div className="rating-bar" onMouseLeave={this.reset}>
                    {
                        this.state.ratingStatus.map((item, index) => (
                            <div key={item.value}
                                className={`rating-unit ${item.active ? 'active' : ''}`}
                                onClick={() => this.select(index)}>
                                {item.value}
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }
}