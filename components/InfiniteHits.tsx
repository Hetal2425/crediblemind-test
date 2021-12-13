import React, { Component } from 'react';
import { connectInfiniteHits } from 'react-instantsearch-dom';
import Hit from './Hits';

class InfiniteHits extends Component {
  sentinel:any = null;
  observer: IntersectionObserver | undefined;

  onSentinelIntersection = (entries:any) => {
    const { hasMore, refineNext }:any = this.props;

    entries.forEach((entry:any) => {
      if (entry.isIntersecting && hasMore) {
        refineNext();
      }
    });
  };
  
  componentDidMount() {
    this.observer = new IntersectionObserver(this.onSentinelIntersection);

    this.observer.observe(this.sentinel);
  }
  
  componentWillUnmount() {
    this.observer?.disconnect();
  }

  render() {
    const { hits }:any = this.props;

    return (
      <div className="ais-InfiniteHits">
        <ul className="ais-InfiniteHits-list" >
          {hits.map((hit:any) => (
            <li key={hit.objectID} className="ais-InfiniteHits-item">
              <Hit hit={hit} />
            </li>
          ))}
          <li
            className="ais-InfiniteHits-sentinel"
            ref={c => (this.sentinel = c)}
          />
        </ul>
      </div>
    );
  }
}

export default connectInfiniteHits(InfiniteHits);
