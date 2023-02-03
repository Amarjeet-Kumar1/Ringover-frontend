import React from 'react';
import './FilterSide.css';

export default function FilterSide() {
  return (
    <div id="filter-side">
      <div id="filter-side-container">
        <div id="filter-heading-container">
          <div id="filter-heading">
            <p>FILTERS</p>
          </div>
          <div id="filter-icon">
            <i className="fa-solid fa-filter"></i>
          </div>
        </div>
        <div id="filter-main">
          <div id="cost-filter">
            <p>Cost</p>

            <div>
              <input type="checkbox" id="cost1" name="cost1" />
              <label htmlFor="cost1">Rs. 1500-4000</label>
            </div>

            <div>
              <input type="checkbox" id="cost2" name="cost2" />
              <label htmlFor="cost2">Rs. 4001-7000</label>
            </div>
            <div>
              <input type="checkbox" id="cost3" name="cost3" />
              <label htmlFor="cost3">Rs. 7000+</label>
            </div>
          </div>
          <div id="colour-filter">
            <p>Colour</p>
            <div id="colour-group">
              <div
                className="colour"
                style={{ backgroundColor: 'rgb(219, 63, 63)' }}
              ></div>
              <div
                className="colour"
                style={{ backgroundColor: 'rgb(42, 191, 225)' }}
              ></div>
              <div
                className="colour"
                style={{ backgroundColor: 'yellow' }}
              ></div>
              <div
                className="colour"
                style={{ backgroundColor: 'rgb(111, 224, 98)' }}
              ></div>
              <div
                className="colour"
                style={{
                  background:
                    'linear-gradient(6deg, rgba(36,13,0,1) 0%, rgba(207,233,23,1) 51%, rgba(0,255,111,1) 100%)',
                }}
              ></div>
            </div>
          </div>
          <div id="design-filter">
            <p>Design templates</p>

            <div>
              <input type="checkbox" id="design1" name="design1" />
              <label htmlFor="design1">2</label>
            </div>

            <div>
              <input type="checkbox" id="design2" name="design2" />
              <label htmlFor="design2">3</label>
            </div>
            <div>
              <input type="checkbox" id="design3" name="design3" />
              <label htmlFor="design3">3+</label>
            </div>
          </div>
          <div id="type-filter">
            <p>Type</p>

            <div>
              <input type="checkbox" id="type1" name="type1" />
              <label htmlFor="type1">Loafers</label>
            </div>

            <div>
              <input type="checkbox" id="type2" name="type2" />
              <label htmlFor="type2">Sneakers</label>
            </div>
          </div>
        </div>
        <div id="filter-button">
          <button>apply</button>
        </div>
      </div>
    </div>
  );
}
