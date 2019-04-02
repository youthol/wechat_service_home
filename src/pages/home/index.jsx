import React from "react";
import { Link as RouterLink } from "react-router-dom";
// import HomeBody from "../../components/homeUnit/HomeBody";
// import HomeBox from "../../components/homeUnit/HomeBox";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import FooterLink from "../../components/layout/FooterLink";
import sr from "../../components/scrollreveal";
import UserImg from "../../common/img/user.png";
import { Grid, Paper, withStyles, Link } from "@material-ui/core";

const style = () => ({
  root: {
    textAlign: "center",
    height: 96
  },
  gridConIcon: {
    height: 0.6 * 96
  },
  gridConText: {
    height: 0.4 * 96,
    fontSize: 14
  }
});
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceUrl: {
        jidian: "https://lab.youthol.cn/app/wechat-service/jd/#/login",
        ecard: "https://lab.youthol.cn/app/wechat-service/ecard/",
        elec:
          "https://lab.youthol.cn/app/wechat-service/elec-use/index.html#/",
        hygiene:
          "https://lab.youthol.cn/app/wechat-service/hygiene/index.html#/",
        exam: "https://lab.youthol.cn/app/wechat-service/exam/index.html#/",
        cet: "http://cet.neea.edu.cn/cet/",
        cert: "https://lab.youthol.cn/app/wechat-service/cert/#/",
        pth: "http://youth.sdut.edu.cn/wechat/pth/",
        calendor: "https://lab.youthol.cn/app/wechat-service/calendar",
        bus: "https://lab.youthol.cn/app/wechat-service/bus",
        qj: "http://720yun.com/t/49f29wa5wbs",
        aboutUs: ""
      }
    };
  }
  componentDidMount() {
    // 出场动画
    sr.reveal(".unit", {
      origin: "bottom",
      duration: 1000,
      delay: 0,
      opacity: 0,
      distance: "20px"
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <RouterLink to="/info">
          <img
            src={UserImg}
            alt="用户"
            onClick={this.toInfoBin}
            className="user-img unit"
          />
        </RouterLink>
        <Header title="学生服务" />
        <div style={{ padding: 16 }}>
          <Grid container spacing={16}>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.jidian} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-chengji" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>绩点查询</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.ecard} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-qia1" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>一卡通查询</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.elec} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-dianchi" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>用电查询</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.hygiene} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-dasao" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>宿舍卫生成绩</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.exam} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-exam" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>考试时间</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.cet} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-chengjifenxi" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>四六级成绩</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.cert} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-jiaoshi" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>教师资格证</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.pth} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-wsdzb_zbgzt_zzsh_txth" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>普通话查询</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.calendor} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-rili1" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>校历查询</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.bus} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-gongjiaoche-" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>班车时间</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.qj} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-quanjing" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>全景地图</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link href={this.state.serviceUrl.aboutUs} underline="none" color="textPrimary">
                <Paper classes={{ root: classes.root }}>
                  <Grid container direction="column">
                    <Grid
                      item
                      className={classes.gridConIcon}
                      container
                      justify="center"
                      alignItems="center"
                    >
                      <i className="iconfont icon-moreApp" />
                    </Grid>
                    <Grid item className={classes.gridConText}>
                      <span>关于我们</span>
                    </Grid>
                  </Grid>
                </Paper>
              </Link>
            </Grid>
          </Grid>
        </div>
        <Footer>
          <FooterLink name="首页" url="" />
        </Footer>
      </div>
    );
  }
}

export default withStyles(style)(Home);
