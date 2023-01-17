import {shallow, ShallowWrapper} from 'enzyme';
import { describe } from 'mocha';
import BlogPost, { IBlogPostProps } from './Components/Blogpost/BlogPost';

describe('BlogPost component', () => {
    let wrapper: ShallowWrapper;
    const blogPost: IBlogPostProps['blogPost'] = {
        title: "Test Title",
        reactions: 12,
        body: "Test body",
        tags: ["tag1", "tag2"],
        id: 0,
        userId: 0
    };

    beforeEach(() => {
        wrapper = shallow(<BlogPost blogPost={blogPost} />);
    });

    it('should display the title when the "Read" button is clicked', () => {
        wrapper.find(".blogPostBtn").simulate("click");
        expect(wrapper.find(".blogPost").text()).to.contain("Test Title");

    });
});
