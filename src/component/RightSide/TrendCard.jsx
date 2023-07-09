import React from 'react'
import "./TrendCard.css"
import { Card } from "../../Data/Data"

function TrendCard() {
  return (
    <div className="trendcard">
        {Card.map((trend)=>{
            return(
                <div className="trend">
                    <span>#{trend.trend}</span>
                    <span>{trend.share}k shares</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard