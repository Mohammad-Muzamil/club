import React, { Fragment, useRef, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import "react-multi-carousel/lib/styles.css";

const ShoeSizeGuide = (props) => {
  const nextSlide = useRef();
  const prevSlide = useRef();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} ref={prevSlide} />
        <button onClick={() => next()} ref={nextSlide} />
      </div>
    );
  };
  return (
    <Fragment>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >

        <div className="Slider-Area pt-100 pb-100 pr-30">
          <div className="container pl-50">
            <div className="row justify-content-between">
                <p className="heading-text">Shoes Size Guide</p>
            </div>
          </div>

          <div className="container pl-60 pt-80">
            <div className="row justify-content-between">
                <p className="subheading-text genderLabel" >
                Mans
                </p>
            </div>
          </div>

          <div className="container pl-60 pt-40">
            <div className="row justify-content-between">
                <table>
                <tr className="sizeStandards" >
                    <th>US</th>
                    <th>UK</th>
                    <th>EU</th>
                    <th>CM</th>
                </tr>
                </table>
            </div>
          </div>

        <div className="container pl-50">
            <div className="row justify-content-between">
                <div className="line pt-20"></div>
            </div>
        </div>

        <div className="container pl-60 pt-40">
            <div className="row justify-content-between">
                <table>
                <tr>
                    <td>6</td>
                    <td>5</td>
                    <td>38.5</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>6.5</td>
                    <td>6</td>
                    <td>39</td>
                    <td>24.5</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>7</td>
                    <td>40</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>7.5</td>
                    <td>7.5</td>
                    <td>40.5</td>
                    <td>25.5</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>8</td>
                    <td>41</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>8.5</td>
                    <td>8.5</td>
                    <td>42</td>
                    <td>26.5</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>9</td>
                    <td>42.5</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>9.5</td>
                    <td>9.5</td>
                    <td>43</td>
                    <td>27.5</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>10</td>
                    <td>44</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>10.5</td>
                    <td>10.5</td>
                    <td>44.5</td>
                    <td>28.5</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>11</td>
                    <td>45</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td>11.5</td>
                    <td>12</td>
                    <td>45.5</td>
                    <td>29.5</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>13</td>
                    <td>46</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>12.5</td>
                    <td>14</td>
                    <td>47</td>
                    <td>30.5</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>15</td>
                    <td>47.5</td>
                    <td>31</td>
                </tr>
                <tr>
                    <td>13.5</td>
                    <td>15.5</td>
                    <td>48</td>
                    <td>31.5</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>16</td>
                    <td>48.5</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>16.5</td>
                    <td>49</td>
                    <td>33</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>17</td>
                    <td>49.5</td>
                    <td>34</td>
                </tr>
                <tr>
                    <td>16.5</td>
                    <td>17.5</td>
                    <td>50</td>
                    <td>34.5</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>18</td>
                    <td>50.5</td>
                    <td>35</td>
                </tr>
                </table>
            </div>
          </div>

          <div className="container pl-60 pt-80">
            <div className="row justify-content-between">
                <p className="subheading-text genderLabel" >
                Women
                </p>
            </div>
          </div>

          <div className="container pl-60 pt-40">
            <div className="row justify-content-between">
                <table>
                <tr className="sizeStandards" >
                    <th>US</th>
                    <th>UK</th>
                    <th>EU</th>
                    <th>CM</th>
                </tr>
                </table>
            </div>
          </div>

        <div className="container pl-50">
            <div className="row justify-content-between">
                <div className="line pt-20"></div>
            </div>
        </div>

        <div className="container pl-60 pt-40">
            <div className="row justify-content-between">
                <table>
                <tr>
                    <td>4</td>
                    <td>1.5</td>
                    <td>34.5</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>4.5</td>
                    <td>2</td>
                    <td>35</td>
                    <td>21.5</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>2.5</td>
                    <td>35.5</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>5.5</td>
                    <td>3</td>
                    <td>36</td>
                    <td>22.5</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>3.5</td>
                    <td>36.5</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>6.5</td>
                    <td>4</td>
                    <td>37.5</td>
                    <td>23.5</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>4.5</td>
                    <td>38</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>7.5</td>
                    <td>5</td>
                    <td>38.5</td>
                    <td>24.5</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>5.5</td>
                    <td>39</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>8.5</td>
                    <td>6</td>
                    <td>40</td>
                    <td>25.5</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>6.5</td>
                    <td>40.5</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>9.5</td>
                    <td>7</td>
                    <td>41</td>
                    <td>26.5</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>7.5</td>
                    <td>42</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>10.5</td>
                    <td>8</td>
                    <td>42.5</td>
                    <td>27.5</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>8.5</td>
                    <td>43</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>11.5</td>
                    <td>9</td>
                    <td>44</td>
                    <td>28.5</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>9.5</td>
                    <td>44.5</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td>12.5</td>
                    <td>10</td>
                    <td>45</td>
                    <td>29.5</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>10.5</td>
                    <td>45.5</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>13.5</td>
                    <td>11</td>
                    <td>46</td>
                    <td>30.5</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>11.5</td>
                    <td>47</td>
                    <td>31</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>12</td>
                    <td>47.5</td>
                    <td>31.5</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>12.5</td>
                    <td>48</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>16.5</td>
                    <td>13</td>
                    <td>48.5</td>
                    <td>32.5</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>13.5</td>
                    <td>49</td>
                    <td>33</td>
                </tr>
                </table>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ShoeSizeGuide;