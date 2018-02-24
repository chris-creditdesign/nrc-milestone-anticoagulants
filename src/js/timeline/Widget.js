import buildSvg from './buildSvg'
import buildScales from './buildScales'
import buildAxis from './buildAxis'
import buildMilestones from './buildMilestones'

const Widget = (options) => {
	return Object.assign(
			{},
			buildSvg,
			buildScales,
			buildAxis,
			buildMilestones,
			options
		)
}

export default Widget