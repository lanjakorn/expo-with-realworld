import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { CardContentImage } from '@components'

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 0,
  },
} )

class ContactUsScreen extends Component {
  state = {
    posts: [
      {
        title: 'laborum quia ea',
        description:
          'Cum eaque et. Beatae dolor adipisci. Nostrum ipsam voluptatum earum ut molestiae autem corrupti. Non laboriosam et quasi odio non soluta ad nisi est. Iste qui repudiandae ipsam reiciendis minima error earum laboriosam. Quo excepturi voluptatem. Saepe aut alias cum a molestiae nulla. Nihil dolorem qui tenetur. Doloremque quia quaerat enim. Aut tempora omnis velit laudantium consequatur quia officia nam. Voluptate libero sequi iure fugiat animi inventore provident voluptatem quo. A et odio iusto vel et necessitatibus in excepturi velit. Dolorem est voluptatem provident harum nisi tempora excepturi. Ut debitis enim eveniet corporis ut impedit hic eligendi atque. Inventore consequatur omnis vitae voluptas nemo exercitationem.',
      },
      {
        title: 'quod quidem eaque',
        description:
          'Sint et veniam quo magnam. Quam nemo perspiciatis nesciunt corrupti sed. Et adipisci eum voluptatem similique tempore explicabo. Ex voluptas consequuntur omnis ipsum rerum voluptatibus illo magni suscipit. Mollitia laborum dolorem ut. Eveniet veritatis cumque autem ut autem eius sit. Nihil neque voluptatum dolorem facilis repudiandae perspiciatis voluptas et ut. Ut officia quasi quia nihil quod mollitia ad. Quis est quasi sit qui ut. Minima cum culpa enim eveniet perferendis occaecati ad architecto occaecati.',
      },
      {
        title: 'dolores sunt est',
        description:
          'Esse cum at temporibus blanditiis. Voluptatum quo non sed provident et ad. Itaque et animi illum fuga consectetur eligendi illum. Modi quas voluptatibus repudiandae atque atque. Nostrum repudiandae enim ut asperiores vel facilis quo repudiandae ratione. Illo ab id nihil commodi perferendis consequatur explicabo sit. Saepe illo excepturi. Optio quas eaque accusamus qui esse voluptates. Eos et explicabo tempore qui est et. Minus officiis non quae et et. Cumque dicta dolorum id voluptatem delectus quisquam quia harum doloremque. Non et error blanditiis dolores assumenda asperiores iusto modi. Dolores ut consectetur est provident qui nihil. Nihil ratione eveniet sequi impedit rem eos. Iusto dolores commodi eveniet dolor voluptas et repudiandae quo nostrum.',
      },
    ],
  }

  render() {
    const { posts } = this.state
    const { container } = styles
    return (
      <View style={container}>
        {posts.map( e =>
          <View
            key={`container-case-${ e.title }`}
            style={{
              borderBottomWidth: 1,
              borderColor: '#ddd',
            }}
          >
            <CardContentImage
              description={e.description}
              key={e.title}
              title={e.title}
              url={'https://www.ricoh.com/environment/img/sp-img-03.jpg'}
            />
          </View>
        )}
      </View>
    )
  }
}

export default ContactUsScreen
