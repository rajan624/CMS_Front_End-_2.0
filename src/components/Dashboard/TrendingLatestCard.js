import React from "react";
import TrendingLatestStyle from "../../styles/ModuleCSS/Dashboard/TrendingLatest.module.css";
import { Button, ButtonGroup } from "@nextui-org/react";
import ImageAnimatePresenceStyle from "../../styles/ModuleCSS/Dashboard/ImageAnimatePresence.module.css";
import { StarIcon, RightArrowIcon, LeftArrowIcon } from "../../Util/Icons";
import { Avatar } from "@nextui-org/react";

function TrendingLatest() {
  return (
    <div className={TrendingLatestStyle.mainDiv}>
      <div className={TrendingLatestStyle.buttonGroup}>
        <Button
          color="primary"
          variant="light"
          className={`${TrendingLatestStyle.button} ${TrendingLatestStyle.isButtonActive}`}
        >
          Trending
        </Button>
        <Button
          color="primary"
          variant="light"
          className={TrendingLatestStyle.button}
        >
          Latest
        </Button>
      </div>
      <div className={TrendingLatestStyle.trendingMainDiv}>
        <div className={TrendingLatestStyle.trendingMainDivRow}>
          <div
            style={{
              backgroundImage: `url(${"/64f47439487abf2c397ca597_Business.jpg"})`,
            }}
            className={TrendingLatestStyle.trendingMainDivRowCard}
          >
             <div className={TrendingLatestStyle.imageInDiv}>
              <div className={TrendingLatestStyle.imageInDiv1}>
                <div></div>
                <div className={TrendingLatestStyle.imageInDiv12}>
                  <h5>Technology</h5>
                </div>
              </div>
              <div className={TrendingLatestStyle.imageInDiv2}>
                <div className={TrendingLatestStyle.imageInDiv2Div}>
                  <h3 className={TrendingLatestStyle.imageInDiv2H3}>
                    A Transformative Journey
                  </h3>
                  <div className={TrendingLatestStyle.imageNameDiv} >                    
                  <Avatar
                    isBordered
                    color="secondary"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                  <h5>Jason Williams</h5>
                  </div>
                </div>
                <div className={TrendingLatestStyle.navDivider}></div>
                <p className={TrendingLatestStyle.sideDivPara}>
                  September 09 &#8226; 02 mins read
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${"/boyWithProjector.jpg"})` }}
            className={TrendingLatestStyle.trendingMainDivRowCard}
          >
            <div className={TrendingLatestStyle.imageInDiv}>
              <div className={TrendingLatestStyle.imageInDiv1}>
                <div></div>
                <div className={TrendingLatestStyle.imageInDiv12}>
                  <h5>Technology</h5>
                </div>
              </div>
              <div className={TrendingLatestStyle.imageInDiv2}>
                <div className={TrendingLatestStyle.imageInDiv2Div}>
                  <h3 className={TrendingLatestStyle.imageInDiv2H3}>
                    A Transformative Journey
                  </h3>
                  <div className={TrendingLatestStyle.imageNameDiv} >                    
                  <Avatar
                    isBordered
                    color="secondary"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                  <h5>Jason Williams</h5>
                  </div>
                </div>
                <div className={TrendingLatestStyle.navDivider}></div>
                <p className={TrendingLatestStyle.sideDivPara}>
                  September 09 &#8226; 02 mins read
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${"/64f48fa44ab67502c77c787f_Nature2.jpg"})`,
            }}
            className={TrendingLatestStyle.trendingMainDivRowCard}
          >
             <div className={TrendingLatestStyle.imageInDiv}>
              <div className={TrendingLatestStyle.imageInDiv1}>
                <div></div>
                <div className={TrendingLatestStyle.imageInDiv12}>
                  <h5>Technology</h5>
                </div>
              </div>
              <div className={TrendingLatestStyle.imageInDiv2}>
                <div className={TrendingLatestStyle.imageInDiv2Div}>
                  <h3 className={TrendingLatestStyle.imageInDiv2H3}>
                    A Transformative Journey
                  </h3>
                  <div className={TrendingLatestStyle.imageNameDiv} >                    
                  <Avatar
                    isBordered
                    color="secondary"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                  <h5>Jason Williams</h5>
                  </div>
                </div>
                <div className={TrendingLatestStyle.navDivider}></div>
                <p className={TrendingLatestStyle.sideDivPara}>
                  September 09 &#8226; 02 mins read
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={TrendingLatestStyle.trendingMainDivRow}>
          <div
            style={{
              backgroundImage: `url(${"/64f47459b31af27272ac69de_Culture.jpg"})`,
            }}
            className={TrendingLatestStyle.trendingMainDivRowCard}
          >
            <div className={TrendingLatestStyle.imageInDiv}>
              <div className={TrendingLatestStyle.imageInDiv1}>
                <div></div>
                <div className={TrendingLatestStyle.imageInDiv12}>
                  <h5>Technology</h5>
                </div>
              </div>
              <div className={TrendingLatestStyle.imageInDiv2}>
                <div className={TrendingLatestStyle.imageInDiv2Div}>
                  <h3 className={TrendingLatestStyle.imageInDiv2H3}>
                    A Transformative Journey
                  </h3>
                  <div className={TrendingLatestStyle.imageNameDiv} >                    
                  <Avatar
                    isBordered
                    color="secondary"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                  <h5>Jason Williams</h5>
                  </div>
                </div>
                <div className={TrendingLatestStyle.navDivider}></div>
                <p className={TrendingLatestStyle.sideDivPara}>
                  September 09 &#8226; 02 mins read
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${"/64f474714133b5962d42139f_Nature.jpg"})`,
            }}
            className={TrendingLatestStyle.trendingMainDivRowCard}
          >
             <div className={TrendingLatestStyle.imageInDiv}>
              <div className={TrendingLatestStyle.imageInDiv1}>
                <div></div>
                <div className={TrendingLatestStyle.imageInDiv12}>
                  <h5>Technology</h5>
                </div>
              </div>
              <div className={TrendingLatestStyle.imageInDiv2}>
                <div className={TrendingLatestStyle.imageInDiv2Div}>
                  <h3 className={TrendingLatestStyle.imageInDiv2H3}>
                    A Transformative Journey
                  </h3>
                  <div className={TrendingLatestStyle.imageNameDiv} >                    
                  <Avatar
                    isBordered
                    color="secondary"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                  <h5>Jason Williams</h5>
                  </div>
                </div>
                <div className={TrendingLatestStyle.navDivider}></div>
                <p className={TrendingLatestStyle.sideDivPara}>
                  September 09 &#8226; 02 mins read
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${"/64f59ac5d74f62c807459200_Music2.jpg"})`,
            }}
            className={TrendingLatestStyle.trendingMainDivRowCard}
          >
              <div className={TrendingLatestStyle.imageInDiv}>
              <div className={TrendingLatestStyle.imageInDiv1}>
                <div></div>
                <div className={TrendingLatestStyle.imageInDiv12}>
                  <h5>Technology</h5>
                </div>
              </div>
              <div className={TrendingLatestStyle.imageInDiv2}>
                <div className={TrendingLatestStyle.imageInDiv2Div}>
                  <h3 className={TrendingLatestStyle.imageInDiv2H3}>
                    A Transformative Journey
                  </h3>
                  <div className={TrendingLatestStyle.imageNameDiv} >                    
                  <Avatar
                    isBordered
                    color="secondary"
                    radius="lg"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                  <h5>Jason Williams</h5>
                  </div>
                </div>
                <div className={TrendingLatestStyle.navDivider}></div>
                <p className={TrendingLatestStyle.sideDivPara}>
                  September 09 &#8226; 02 mins read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingLatest;
