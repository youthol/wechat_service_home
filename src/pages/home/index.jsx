import React from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Grid, Paper, withStyles, Link } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { updateUserInfo } from "../../store/action";
import { serviceUrl } from "../../api/service";

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
      userPath: "/bind"
    };
  }

  componentDidMount = async () => {
    
      console.log(this.props.reduxUserInfo);
      
    if (this.props.location.resData) {
      const { data, meta } = this.props.location.resData;
      await this.props.updateUserInfo({ info: data, meta });
    }
    if (this.props.reduxUserInfo.info) {
      this.setState({
        times: 0,
        userPath: "/user"
      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <RouterLink to={this.state.userPath}>
          <AccountCircle color="action" className="user-img" fontSize="large" />
        </RouterLink>
        <Header title="学生服务" />
        <div style={{ padding: 16 }}>
          <Grid container spacing={16}>
            <Grid item xs={4}>
              <Link
                href={serviceUrl.jidian}
                underline="none"
                color="textPrimary"
              >
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
              <Link
                href={serviceUrl.ecard}
                underline="none"
                color="textPrimary"
              >
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
              <Link href={serviceUrl.elec} underline="none" color="textPrimary">
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
              <Link
                href={serviceUrl.hygiene}
                underline="none"
                color="textPrimary"
              >
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
              <Link href={serviceUrl.exam} underline="none" color="textPrimary">
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
              <Link href={serviceUrl.cet} underline="none" color="textPrimary">
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
              <Link href={serviceUrl.cert} underline="none" color="textPrimary">
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
              <Link href={serviceUrl.pth} underline="none" color="textPrimary">
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
              <Link
                href={serviceUrl.calendor}
                underline="none"
                color="textPrimary"
              >
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
              <Link href={serviceUrl.bus} underline="none" color="textPrimary">
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
              <Link href={serviceUrl.qj} underline="none" color="textPrimary">
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
              <Link
                href={serviceUrl.aboutUs}
                underline="none"
                color="textPrimary"
              >
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
        <Footer />
      </div>
    );
  }
}

const NewHome = withStyles(style)(Home);

const mapStateToProps = (state, ownProps) => ({
  reduxUserInfo: state.userInfo
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUserInfo: data => dispatch(updateUserInfo(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewHome);
